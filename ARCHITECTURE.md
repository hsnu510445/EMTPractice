# EMT1 情境複習遊戲 — 架構筆記

給未來的 Claude session 快速回憶用。這是給使用者（台灣 EMT1，技能有點生疏）自己複習用的單機網頁小遊戲，**必須維持 `file://` 直接雙擊開啟就能玩**，不能依賴 server 或 build step。所有跨檔案載入都用 `<script src>`，不能用 `fetch()`（file:// 下會被 CORS 擋掉）。

## 入口檔案與「假多頁」機制

實際上只有 **index.html** 是真正的頁面，其他四個 `.html` 都是 11 行的 stub，靠 `location.replace("index.html?mode=xxx")` 轉址過去，讓使用者感覺像在切換頁面／有獨立網址可分享：

| 檔案 | mode 參數 | 對應畫面 |
|---|---|---|
| `index.html` | （無，或任何值都會顯示首頁）| 首頁 5 張卡片 |
| `triage.html` | `mode=triage` | 檢傷分類列表 |
| `command.html` | `mode=command` | 分配隊友列表 |
| `reference.html` | `mode=reference` | 重點整理頁 |
| `practice.html` | `mode=practice` | 練習情境選單 |

`app.js` 最底部（約 3654 行）讀 `URLSearchParams(location.search).get("mode")` 決定要不要跳過首頁直接顯示對應畫面。

首頁 5 張卡片（`index.html` 的 `#homeScreen`）：
1. **🎮 練習**（`#goPracticeBtn`，純 div，JS 監聽點擊直接切畫面，不走 URL）
2. **🚑 檢傷分類**（`<a href="triage.html">`）
3. **🗣️ 分配隊友**（`<a href="command.html">`）
4. **📖 重點整理**（`<a href="reference.html">`）
5. **❓ 我的疑問筆記**（`#goNotesBtn`，純 div）

## HTML Partials（document.write 注入）

`index.html` 本身只有首頁骨架 + 一串 `<script src="partials/xxx.js">`。四個 partial 檔案各自用 `document.write(...)` 把整段 HTML 字串塞進頁面，載入順序：`triage.js` → `command.js` → `practice.js`（這三個在 `<main>` 內）→ `modals.js`（在 `<main>` 外，body 後段）→ `config.js` → 88 個情境檔 → `app.js`（一定要最後載入，因為它要抓已經 push 進 `SCENARIOS` 的資料並綁 DOM 事件）。

- **partials/triage.js** — 檢傷分類列表畫面 + 進行中畫面的 DOM
- **partials/command.js** — 分配隊友列表畫面 + 進行中畫面的 DOM
- **partials/practice.js** — 練習選單、遊戲畫面（`gameScreen`）、結果畫面（`resultScreen`）、疑問筆記列表畫面（`notesListScreen`）等主體
- **partials/modals.js** — 所有 modal／checklist 面板：GI 模式、SAMPLE 病史、交班報告、監測、初次/二次評估、速查表 cheat modal 等

新增任何 DOM 元素時要注意：div/section 標籤要在 index.html + 4 個 partial 合起來平衡（過去驗證流程一直用這個當結構完整性檢查之一）。

## 三大遊戲模式（都在同一個 app.js 裡）

app.js 共 3667 行，是唯一的邏輯檔，裡面其實塞了三套彼此獨立的小遊戲引擎：

1. **練習模式（Practice）** — 主體，line ~815–2980。單一情境（SCENARIO）的逐步操作/選擇題遊戲。
2. **檢傷分類模式（Triage）** — line ~2996–3389。`TRIAGE_SCENARIOS`／`TRIAGE_REAL_CASES` 資料 + START 檢傷流程、倒數計時、多病患卡片。
3. **分配隊友模式（Command）** — line ~3390–3653。`COMMAND_SCENARIOS` 資料 + 無線電突發事件、倒數重新調度隊友。

這三套是平行的資料結構 + render 函式，彼此不共用 state，只共用 `TOOLS`／`ICONS`／畫面切換的 helper。修改其中一個模式時通常不會影響到另外兩個。

以下文件主要記錄 **練習模式**，因為情境內容（scenarios/ 目錄）都是餵給這個模式的。

## 練習模式資料模型

### 情境（Scenario）

每個 `scenarios/**/*.js` 檔案是這樣的形式（透過 `<script src>` 直接執行，副作用是 push 進全域陣列）：

```js
SCENARIOS.push({
  id: "unique-id",              // 檔名通常跟 id 一致
  category: "assessment"|"bls"|"trauma"|"special"|"advanced",
  difficulty: 1-5,              // ★ 星等，5 星是 2026 年後新加的最高難度
  title: "...", summary: "...",
  steps: [ ... ]
});
```

`CATEGORY_LABELS`（config.js）：整體評估流程／BLS 、CPR／創傷處置／特殊狀況／高級救護。

### Step 三種型別

- **`type:"action"`** — 玩家要點對工具（+ 可能要點身體部位當 target）。有 `correct:{tool,target,...}`，`mistakes:[{tool,target,explain}]` 列出已知的常見錯誤選項（給即時 explain，但不算分）。
- **`type:"choice"`** — 4 選 1 文字選擇題，`choices:[{text,correct,explain}]`，恰好 1 個 `correct:true`。（品質規則：4 個選項文字長度差不要超過 45 字，避免用長度洩題。）
- **`type:"emergency"`** — 限時選擇題（`timeLimit` 秒數），外觀比照 choice 但有倒數計時＋`randomChance`（見下）。

### 分支與跳過機制

- `step.next` / `choice.next`：可以指到別的 step id 做分支；沒指定就照陣列順序 `stepIndex+1`；到底了 (`-1`) 觸發 `finishScenario()`。統一由 `resolveNextIndex()`（app.js:2729）處理。
- **`randomChance`**（0~1 的機率值，加在 `type:"emergency"` 的 step 上）：`renderStep()`（app.js:1082）一開始就檢查，`Math.random() > randomChance` 時直接跳過這個 step（呼叫 `resolveNextIndex()` 找下一步），**不會**計入 `visitedCount`／分數，玩家完全看不到被跳過。這就是「緊急事件有時出現有時不出現」的實作方式，目前用在約 11 個情境檔裡，機率多為 0.4～0.55。

### Action 的特殊 target 結構

某些 correct 物件除了 `tool`/`target` 還有：
- `oxygenSpec:{device, flowMin, flowMax}` — 對照 `O2_DEVICES`
- `positionSpec:{position}` — 對照 `POSITION_OPTIONS`
- `gcsSpec:{...}` — 對照 GCS 三個子表（`GCS_EYE`/`GCS_VERBAL`/`GCS_MOTOR`）
- `giRelevant:[...]` + `giFindings:{...}` — key 要對得上 `GI_ITEM_POOL`（一般印象 GI 模式的身體部位選項池）
- `reading:"..."` — 量測數值，畫面上先只顯示數字，等情境結束才在結果頁一次揭曉解讀
- `altTargets:[...]` — 允許的替代正確部位（例如血壓量左手或右手都算對）

新增/修改 action 步驟時要注意：**`target` 必須存在於該 `tool.targets` 陣列裡**（`needsTarget:true` 的工具）。這是這個 session 中期才補上的嚴格檢查，抓到過 2 個潛伏很久的 bug（`special-epistaxis.js` 對 head 用了不支援 head 的 `directPressure`；`trauma-dog-bite.js` 對 leftLeg 用了不支援 leftLeg 的 `triangularBandage`）。

## TOOLS（app.js:78-136）

`T(id, label, category, needsTarget, targets, icon, physical, photo)` 建構出的扁平陣列，`category` 決定它出現在哪個面板分頁：

- `sceneAction` / `ppe` — 急救包分頁（現場安全、求救、保留證物、交班、手套）
- `judgement` — 「你的判斷與技巧」常駐面板：整體印象、AVPU、GCS、視聽感、脈搏、皮膚、快速創傷評估、病史詢問、FAST 中風評估、持續評估、**`primaryAssessment`（初次評估）**、**`secondaryAssessment`（二次評估）** ← 這兩個是最新加的
- `instruments` — 筆燈、血壓、血糖、體溫、血氧計
- `technique` — 開呼吸道、清異物、頭頸中立固定、哈姆立克、CPR、擺位、積極降溫
- `airwayDevices` / `bleed` / `immob` / `special` — 都要先打開「急救包」或「氧氣鋼瓶」才能選的實體裝備

`needsTarget:true` 的工具點下去後還要再點身體部位圖（`BODY_TARGETS`）當 target。

### Checklist 面板 pattern（重要，之後加類似功能可以複用）

`ongoingMonitor` 這個工具首創了一種「面板」互動（不是點一下就評分，而是打開一個 checklist，全部勾完才能按確認）：

```
點 tool → onToolClick() 裡 toggle state.xxxOpen + wrap 的 .open class
        → renderXxxPanel() 畫出 checklist（來源是一個純資料陣列，如 MONITOR_CHECKLIST）
        → 全部勾完才解除 xxxConfirmBtn 的 disabled
        → 按確認 → evaluateAction(toolId, target, meta)
```

目前有 4 組這樣的面板，全部是各自獨立複製出來的程式碑（這個專案的風格是「近似重複」優於「提早抽象」，沒有共用成一個泛用函式）：

| 面板 | 資料陣列 | render 函式 | 對應工具 id |
|---|---|---|---|
| 持續監測 | `MONITOR_CHECKLIST` | `renderMonitorPanel()` | `ongoingMonitor` |
| 送醫交班 | `HANDOVER_CHECKLIST` | `renderHandoverList()`（在 `handoverModal` 裡）| `handoverReport` |
| 初次評估 | `PRIMARY_ASSESSMENT_CHECKLIST` | `renderPrimaryAssessPanel()` | `primaryAssessment` |
| 二次評估 | `SECONDARY_ASSESSMENT_CHECKLIST` | `renderSecondaryAssessPanel()` | `secondaryAssessment` |

另外還有兩個非 checklist 但同樣是「先開 modal 再確認」的：GI 模式（`generalImpression` 工具 → `giModal`，用身體部位圖點選異常 → `giConfirmBtn`）、SAMPLE 病史（`history` 工具 → `sampleModal`，逐類問答 → `sampleConfirmBtn`）。

## 疑問筆記功能（Notes）

使用者在任一題答完後，可以在題目下方輸入框寫下疑問並「儲存」，存到 `localStorage`（key: `emt1_practice_notes_v1`，`loadQuestionNotes()`/`saveQuestionNotes()`），內容包含當下的情境/題目/正解說明/使用者疑問/時間戳。首頁「❓ 我的疑問筆記」卡片可以看列表（`renderNotesList()`），並可以匯出成 `.txt`（Blob + `URL.createObjectURL` + `<a download>`），方便之後整份貼給 AI 問。（唯一沒辦法用 jsdom headless 驗證的地方，因為 jsdom 沒實作 `URL.createObjectURL`；這是 jsdom 的限制，不是瀏覽器限制。）

## 病理生理加碼題 & SAMPLE 小遊戲（較早期的功能，非本次新增）

- `PATHOPHYS_BANK`（app.js:239-701）＋ `matchPathophysQuestions(sc)`：依情境主題比對出相關的病理生理選擇題，在 `finishScenario()` 結果頁（`renderPathophysBox()`）加碼考。
- SAMPLE 病史採用 `SAMPLE_QUESTION_BANK` 驅動的互動小遊戲（逐類打勾詢問 S/A/M/P/L/E），比單純點一下工具豐富。

## 難度星等

星等顯示公式在 app.js 出現 3 處（選單卡片 × 2、結果頁分類列 × 1）：
```js
`${"★".repeat(sc.difficulty)}${"☆".repeat(5 - sc.difficulty)}`
```
已從原本的 3 星改成 5 星制；`difficulty:5` 是本 session 新加的最高難度（10 個新情境）。

## 情境檔案統計（scenarios/ 目錄，2026-09 現況）

共 **88** 個情境檔，全部要在 `index.html` 手動加一行 `<script src="scenarios/...">` 才會生效（沒有自動掃描機制）：

| 分類目錄 | 檔案數 | 說明 |
|---|---|---|
| `scenarios/assessment/` | 7 | 整體評估流程主軸情境（含新加的初次/二次評估骨架練習）|
| `scenarios/bls/` | 5 | BLS / CPR / 異物哽塞 / 溺水 |
| `scenarios/trauma/` | 30 | 創傷處置，含多起優先度分類、大量傷患情境 |
| `scenarios/special/` | 42 | 特殊狀況，數量最多，涵蓋中毒/環境/婦產/精神行為等 |
| `scenarios/advanced/` | 4 | 高級救護（進階呼吸道、ACS、燒燙傷吸入性、創傷休克）|

## 驗證流程（每次改動情境/引擎都應該走一遍）

這個 session 建立起來、之後也應該延用的驗證順序：

1. `node -c` 對每個改到的檔案做語法檢查
2. 寫一個組合腳本：用 Proxy 手刻 DOM stub，把 partials + 所有 scenario 檔 + app.js 串起來當純 Node 腳本執行，把 `TOOLS`/`SCENARIOS`/`GI_ITEM_POOL`/`O2_DEVICES`/`POSITION_OPTIONS`/`BODY_SHAPES` 等掛到 `global.__CAP__`，然後檢查：
   - scenario id 不重複、category 合法
   - tool id 存在；**`needsTarget:true` 時 target 必須在 `tool.targets` 內**（曾抓到 2 個潛伏 bug）
   - `altTargets`/`oxygenSpec.device`/`positionSpec.position`/`gcsSpec` 範圍合法
   - `giRelevant`/`giFindings` 的 key 對得上 `GI_ITEM_POOL`
   - choice step 剛好 4 個選項、剛好 1 個 `correct:true`
   - choice 文字長度差 ≤45 字
   - `step.next`/`choice.next` 指到存在的 step id
   - emergency step 有數字 `timeLimit`
3. index.html + 4 個 partials 的 div/section 標籤配對數檢查
4. `npm install jsdom --no-save`，寫互動式點擊測試模擬真人玩法（注意 jsdom 在 file:// origin 下會擋 `localStorage`，這是 jsdom 限制不是真瀏覽器限制，測試時用 `Object.defineProperty(win, "localStorage", {value:<記憶體版 stub>, configurable:true})` 繞過），測完 `rm -rf node_modules package-lock.json package.json` 清掉暫時依賴
5. `start "" "index.html"` 真的開瀏覽器最後看一次

jsdom 測試常見的坑（之後寫測試腳本可以少踩）：
- 工具按鈕比對要用「每個 step 精確 label 陣列」而非鬆散關鍵字 `.some(kw=>...)`，不然會誤點到別的工具
- `needsTarget:true` 的工具點完還要再點身體部位圖才會觸發評分
- `ongoingMonitor`/`primaryAssessment`/`secondaryAssessment` 這類 checklist 面板，測試要勾滿所有 checkbox（dispatch `change` 事件）才能按 confirm
- `generalImpression` 開的是 GI modal（要點 `giOverallBtn` → 逐一點 `.gi-item-btn` → `giBackBtn` → `giConfirmBtn`）
- `history` 開的是 SAMPLE modal（要逐次點 `.triage-check-btn[data-idx='0']` 直到跑完，再點 `sampleConfirmBtn`）

## 內容取捨的既有慣例（給之後加情境參考）

- 不是每個 assessment 情境都硬塞初次/二次評估 checklist；`trauma-mvc.js` 刻意不加二次評估，因為那個情境本身在教「load-and-go，別在現場做太細的處置」，硬加會自相矛盾。加新的教學骨架步驟前，先想這個情境的教學重點是什麼，跟新步驟會不會衝突。
- `randomChance` 緊急事件目前只加在少數情境（約 11 個），不是每個情境都要有；用意是製造「有時候會有時候不會」的真實感，不是每個情境都得塞一個。
