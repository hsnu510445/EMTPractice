document.write(`
<div class="modal-overlay" id="cheatModal">
  <div class="modal">
    <h2>速查表 / 常用縮寫</h2>
    <h3>整體流程順序</h3>
    <ul>
      <li>現場安全評估 → 標準防護 BSI → 建立整體印象（傷病機轉 MOI/NOI）</li>
      <li>初步評估：意識 AVPU → 呼吸道 Airway → 呼吸 Breathing → 循環 Circulation（含大出血控制）</li>
      <li>優先度決定（是否需要立即送醫）</li>
      <li>病史與身體評估：創傷→快速創傷評估 DCAP-BTLS；醫療→SAMPLE + OPQRST</li>
      <li>基礎生命徵象測量 → 詳細身體檢查（狀況允許時）</li>
      <li>持續評估（Ongoing Assessment） → 送醫交班</li>
    </ul>
    <h3>AVPU（意識程度）</h3>
    <ul><li>A 清醒　V 對聲音有反應　P 對疼痛有反應　U 無反應</li></ul>
    <h3>SAMPLE（病史）</h3>
    <ul><li>S症狀 A過敏史 M用藥史 P過去病史 L最後進食 E事發經過</li></ul>
    <h3>OPQRST（疼痛/症狀評估）</h3>
    <ul><li>O發作方式 P誘發/緩解 Q性質 R轉移 S嚴重度 T時間</li></ul>
    <h3>DCAP-BTLS（創傷檢查重點）</h3>
    <ul><li>D變形 C挫傷 A擦傷 P穿刺傷 B燒傷 T觸痛 L撕裂傷 S腫脹</li></ul>
    <h3>CPR 按壓速率／深度／比例（參考值）</h3>
    <table>
      <tr><th>對象</th><th>速率</th><th>深度</th><th>單人比例</th></tr>
      <tr><td>成人</td><td>100-120/分</td><td>至少5公分</td><td>30:2</td></tr>
      <tr><td>兒童</td><td>100-120/分</td><td>約胸廓前後徑1/3</td><td>30:2</td></tr>
      <tr><td>嬰兒</td><td>100-120/分</td><td>約4公分</td><td>30:2</td></tr>
    </table>
    <p style="font-size:0.78rem;color:var(--muted);">雙人施救兒童/嬰兒比例常為15:2，實際數值請以現行官方指引為準。量測工具（血壓計、血糖機、觸診脈搏等）測到的數字含意與正常區間請自行判斷或事後查證，本表故意不列出，以免影響練習效果。</p>
    <div class="close-row"><button class="btn btn-primary" id="closeCheatBtn">關閉</button></div>
  </div>
</div>

<div class="modal-overlay" id="cprModal">
  <div class="modal cpr-modal">
    <div class="cpr-topbar">
      <div class="cpr-role-badge" id="cprRoleBadge"></div>
      <div class="cpr-ticker" id="cprTicker"></div>
    </div>
    <div class="cpr-fatigue-row hidden" id="cprFatigueRow">
      <span style="font-size:0.78rem;">體力</span>
      <div class="cpr-fatigue-track"><div class="cpr-fatigue-fill" id="cprFatigueFill"></div></div>
      <button class="btn btn-outline hidden" id="cprHandoffBtn">🙋 請求換手</button>
    </div>
    <div class="cpr-body" id="cprBody"></div>
    <div class="cpr-log" id="cprLog"></div>
  </div>
</div>

<div class="modal-overlay" id="giModal">
  <div class="modal gi-modal">
    <h4 style="margin:0 0 4px;font-size:0.95rem;">建立整體印象：點身體部位，選擇要查看的項目</h4>
    <p style="font-size:0.76rem;color:var(--muted);margin:0 0 10px;">每個部位都有幾個可以查看的項目，但不是每一個都跟目前狀況有關——看完你覺得夠了，按下面的「完成」。</p>
    <div id="giDiagramView">
      <svg class="patient gi-svg" id="giSvg" viewBox="0 0 200 340"></svg>
      <button class="btn btn-outline gi-overall-btn" id="giOverallBtn">🧍 整體觀察（不限單一部位）</button>
    </div>
    <div id="giItemsView" class="hidden">
      <button class="btn btn-outline" id="giBackBtn" style="margin-bottom:10px;">← 換個部位</button>
      <div id="giItemsList" class="gi-items-list"></div>
    </div>
    <div class="gi-log" id="giLog"></div>
    <div class="close-row">
      <button class="btn btn-outline" id="giCancelBtn">取消</button>
      <button class="btn btn-primary" id="giConfirmBtn">✔ 完成整體印象</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="gcsModal">
  <div class="modal">
    <div class="gcs-panel" style="margin-top:0;background:none;border:none;padding:0;">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;">
        <h4 style="font-size:0.95rem;margin:0;">依照情境描述，評出GCS三項分數</h4>
        <button class="btn btn-outline" id="gcsHintToggleBtn" style="font-size:0.75rem;padding:4px 10px;">💡 顯示分數說明</button>
      </div>
      <div class="gcs-group"><div class="gcs-group-title">👁️ 睜眼反應 E</div><div class="gcs-options" id="gcsEyeOptions"></div></div>
      <div class="gcs-group"><div class="gcs-group-title">🗣️ 語言反應 V</div><div class="gcs-options" id="gcsVerbalOptions"></div></div>
      <div class="gcs-group"><div class="gcs-group-title">✋ 運動反應 M</div><div class="gcs-options" id="gcsMotorOptions"></div></div>
      <div class="cpr-hit-feedback" id="gcsFeedback"></div>
      <div class="close-row">
        <button class="btn btn-outline" id="gcsCancelBtn">取消</button>
        <button class="btn btn-primary" id="gcsConfirmBtn" disabled>確認評分</button>
      </div>
    </div>
  </div>
</div>

<div class="modal-overlay" id="tqModal">
  <div class="modal cpr-modal">
    <div class="cpr-instruction" id="tqInstruction"></div>
    <div class="cpr-body" id="tqBody"></div>
    <div class="cpr-log" id="tqLog"></div>
  </div>
</div>

<div class="modal-overlay" id="breathModal">
  <div class="modal cpr-modal">
    <div class="cpr-instruction">觀察側面胸廓起伏，用碼表計時，數出呼吸次數（次/分）</div>
    <div class="breath-figure-wrap">
      <svg class="breath-figure" viewBox="0 0 240 110">
        <ellipse cx="200" cy="90" rx="34" ry="8" fill="#dfe6ec"/>
        <circle cx="28" cy="55" r="16" fill="#e8b894"/>
        <rect x="40" y="70" width="165" height="22" rx="11" fill="#cfd8e3"/>
        <ellipse id="breathChest" class="breath-chest" cx="78" cy="70" rx="30" ry="13" fill="#a9c7e0"/>
      </svg>
    </div>
    <div class="breath-stopwatch-row">
      <div class="breath-timer" id="breathTimer">00 : 00.0</div>
      <button class="btn btn-outline" id="breathStartBtn">▶ 開始／暫停</button>
      <button class="btn btn-outline" id="breathResetBtn">↺ 歸零</button>
    </div>
    <div class="breath-input-row">
      <label for="breathInput" style="font-size:0.85rem;">你數到的呼吸速率：</label>
      <input type="number" id="breathInput" min="0" max="80" placeholder="次/分">
      <button class="btn btn-primary" id="breathConfirmBtn">確認</button>
    </div>
    <div id="breathFeedback" class="cpr-hit-feedback"></div>
  </div>
</div>

<div class="modal-overlay" id="transportModal">
  <div class="modal cpr-modal">
    <div class="cpr-topbar">
      <div class="cpr-role-badge" id="transportRoleBadge"></div>
    </div>
    <div class="cpr-body" id="transportBody"></div>
    <div class="cpr-log" id="transportLog"></div>
  </div>
</div>

<div class="modal-overlay" id="sampleModal">
  <div class="modal gi-modal">
    <h4 style="margin:0 0 4px;font-size:0.95rem;">SAMPLE 病史詢問：練習怎麼問</h4>
    <p style="font-size:0.76rem;color:var(--muted);margin:0 0 10px;">六大類各先選一個你會用的問法，選完才會看到病患／家屬怎麼回答。問法選得好比較能問到完整資訊，但每一類都問過一輪才能完成。</p>
    <div id="sampleCategoryList" class="gi-items-list"></div>
    <div class="close-row">
      <button class="btn btn-outline" id="sampleCancelBtn">取消</button>
      <button class="btn btn-primary" id="sampleConfirmBtn" disabled>✔ 完成病史詢問</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="handoverModal">
  <div class="modal gi-modal">
    <h4 style="margin:0 0 4px;font-size:0.95rem;">送醫交班：勾選你會提到的重點</h4>
    <p style="font-size:0.76rem;color:var(--muted);margin:0 0 10px;">交班內容不完整可能讓醫院漏掉重要資訊。勾出這次你會在交班時提到的項目，全部勾完核心重點才能完成。</p>
    <div id="handoverItemsList" class="gi-items-list"></div>
    <div id="handoverWarning" class="cpr-hit-feedback hidden"></div>
    <div class="close-row">
      <button class="btn btn-outline" id="handoverCancelBtn">取消</button>
      <button class="btn btn-primary" id="handoverConfirmBtn">✔ 完成交班</button>
    </div>
  </div>
</div>
`);
