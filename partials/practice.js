document.write(`
  <section id="menuScreen" class="hidden">
    <button class="btn btn-outline" id="homeFromMenuBtn" style="margin-bottom:14px;">← 返回首頁</button>
    <div class="mystery-bar">
      <label class="mystery-toggle"><input type="checkbox" id="mysteryToggle" checked> 🔍 神秘模式（隱藏分類與標題，遊玩中自己找線索）</label>
      <button class="btn btn-primary" id="randomBtn">🎲 隨機情境</button>
    </div>
    <div class="filters" id="filterBar"></div>
    <div class="grid" id="scenarioGrid"></div>
  </section>

  <section id="gameScreen" class="hidden">
    <div class="game-header">
      <button class="btn btn-outline" id="backToMenuBtn">← 返回選單</button>
      <div class="progress-track"><div class="progress-fill" id="progressFill"></div></div>
      <span id="stepCounter" style="font-size:0.8rem;color:var(--muted);"></span>
    </div>
    <div class="game-layout">
    <aside class="notes-sidebar">
      <div class="notes-title">📝 現場筆記</div>
      <div class="notes-list" id="notesList"></div>
    </aside>
    <div class="game-main">
    <div class="scene-box">
      <div class="step-label" id="stepLabel"></div>
      <span class="mode-tag" id="modeTag"></span>
      <div class="scene-text" id="sceneText"></div>
      <div class="question-text" id="questionText"></div>

      <div id="choiceArea" class="hidden">
        <div class="choices" id="choicesBox"></div>
      </div>

      <div id="actionArea" class="hidden">
        <div class="action-layout">
          <div class="diagram-card">
            <svg class="patient" id="patientSvg" viewBox="0 0 200 340"></svg>
            <div class="selected-tool-hint hidden" id="selectedToolHint"></div>
            <div class="applied-log" id="appliedLog"></div>
          </div>

          <div class="tech-card">
            <div class="tech-card-title">🧠 你的判斷與技巧（不需要開包，隨時可用）</div>
            <div class="tray-tabs" id="techTabs"></div>
            <div class="tray-tools" id="techTools"></div>
          </div>
          <div class="hint-btn-row"><button class="btn btn-outline hidden" id="hintBtn">💡 顯示提示</button></div>
          <div class="tray-wrap" id="posWrap">
            <div class="pos-panel" id="posPanelInner">
              <h4>選擇要擺的姿勢</h4>
              <div class="pos-options" id="posOptions"></div>
            </div>
          </div>

          <div class="tray-wrap" id="monitorWrap">
            <div class="monitor-panel">
              <h4>持續評估：依序重新檢查</h4>
              <div class="monitor-checklist" id="monitorChecklist"></div>
              <button class="btn btn-primary" id="monitorConfirmBtn" disabled>完成這輪重新評估</button>
            </div>
          </div>

          <div class="tray-wrap" id="primaryAssessWrap">
            <div class="monitor-panel">
              <h4>初次評估：依序完成每一項</h4>
              <p class="checklist-hint">意識 → 呼吸道 → 呼吸 → 循環 → 決定送醫優先度，這是到院前評估最基本的骨架，練習到能不假思索地照順序做完。</p>
              <div class="monitor-checklist" id="primaryAssessChecklist"></div>
              <button class="btn btn-primary" id="primaryAssessConfirmBtn" disabled>完成初次評估</button>
            </div>
          </div>

          <div class="tray-wrap" id="secondaryAssessWrap">
            <div class="monitor-panel">
              <h4>二次評估：依序完成每一項</h4>
              <p class="checklist-hint">初次評估確認沒有立即威脅生命的問題後，才進入二次評估，做更完整的生命徵象、病史與身體檢查。</p>
              <div class="monitor-checklist" id="secondaryAssessChecklist"></div>
              <button class="btn btn-primary" id="secondaryAssessConfirmBtn" disabled>完成二次評估</button>
            </div>
          </div>

          <div class="kit-row">
            <div class="kit-item" id="bagItem"><span class="kit-icon" id="bagIcon"></span><span class="lbl">急救包</span></div>
            <div class="kit-item" id="o2Item"><span class="kit-icon" id="o2Icon"></span><span class="lbl">氧氣鋼瓶</span></div>
          </div>
          <div class="tray-wrap" id="trayWrap">
            <div class="tray-card">
              <div class="tray-tabs" id="trayTabs"></div>
              <div class="tray-tools" id="trayTools"></div>
            </div>
          </div>
          <div class="tray-wrap" id="o2Wrap">
            <div class="o2-panel">
              <h4>選擇給氧裝置與流量</h4>
              <div class="o2-devices" id="o2Devices"></div>
              <div class="o2-flow-row">
                <span style="font-size:0.8rem;">流量</span>
                <input type="range" id="o2FlowSlider" min="0" max="20" step="1" value="0">
                <span class="o2-flow-val" id="o2FlowVal">0 L/min</span>
              </div>
              <button class="btn btn-primary" id="o2ConfirmBtn" disabled>接上病患</button>
            </div>
          </div>
        </div>
      </div>

      <div id="feedbackArea"></div>
      <div class="next-row" id="nextRow"></div>
      <div class="note-box">
        <label for="stepNoteInput" class="note-label">❓ 對這一題的題目或解答有疑問？寫下來，之後可以回頭看</label>
        <textarea id="stepNoteInput" rows="2" placeholder="例如：為什麼不能先給氧氣……"></textarea>
        <div class="note-actions">
          <button class="btn btn-outline" id="stepNoteSaveBtn">💾 儲存疑問</button>
          <span id="stepNoteSavedMsg" class="note-saved-msg hidden">✓ 已儲存，可以在首頁「我的疑問筆記」查看</span>
        </div>
      </div>
    </div>
    </div>
    </div>
  </section>

  <section id="resultScreen" class="hidden">
    <div class="result-box">
      <div style="font-size:0.9rem;color:var(--muted);">情境完成 · 揭曉</div>
      <h2 id="resultTitle" style="margin:6px 0;"></h2>
      <div class="reveal-category" id="resultCategory"></div>
      <div class="big-score" id="resultScore"></div>
      <div id="resultSub" style="color:var(--muted);font-size:0.85rem;"></div>
      <div id="reviewList"></div>
      <div id="realCaseBox" class="real-case-box hidden"></div>
      <div id="pathophysBox" class="pathophys-box hidden"></div>
      <div class="result-actions">
        <button class="btn btn-primary" id="replayBtn">再玩一次</button>
        <button class="btn btn-outline" id="toMenuBtn">返回選單</button>
      </div>
    </div>
  </section>

  <section id="notesListScreen" class="hidden">
    <button class="btn btn-outline" id="homeFromNotesListBtn" style="margin-bottom:14px;">← 返回首頁</button>
    <h2 style="margin:0 0 4px;">❓ 我的疑問筆記</h2>
    <p style="color:var(--muted);font-size:0.85rem;margin:0 0 14px;">練習中對題目或解答有疑問時存下來的筆記，可以回頭自己查證或找人討論。</p>
    <div id="notesListBox"></div>
  </section>
`);
