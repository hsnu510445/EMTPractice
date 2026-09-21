document.write(`
  <section id="triageListScreen" class="hidden">
    <button class="btn btn-outline" id="homeFromTriageListBtn" style="margin-bottom:14px;">← 返回首頁</button>
    <div class="grid" id="triageGrid"></div>
  </section>

  <section id="triagePlayScreen" class="hidden">
    <div class="game-header">
      <button class="btn btn-outline" id="backFromTriagePlayBtn">← 返回檢傷列表</button>
    </div>
    <div class="scene-box">
      <div class="scene-text" id="triageIntro"></div>
      <div class="triage-timer-row">
        <span id="triageProgress"></span>
        <span>目前：<b id="triageCurrentPatient">-</b></span>
        <span>⏱ 這位傷患：<b id="triagePatientTimer">00:00</b></span>
        <span>總計時間：<b id="triageTotalTimer">00:00</b></span>
      </div>
      <div id="triagePatientGrid" class="triage-patient-grid"></div>
      <div class="next-row"><button class="btn btn-primary" id="triageSubmitBtn">下一位</button></div>
    </div>
  </section>

  <section id="triageResultScreen" class="hidden">
    <div class="result-box">
      <div style="font-size:0.9rem;color:var(--muted);">檢傷分類結果</div>
      <div class="big-score" id="triageScore"></div>
      <div id="triageResultList" style="margin-top:10px;"></div>
      <div id="triageRealCaseBox" class="real-case-box hidden"></div>
      <div class="result-actions">
        <button class="btn btn-primary" id="triageReplayBtn">再挑戰一次</button>
        <button class="btn btn-outline" id="triageToListBtn">返回檢傷列表</button>
      </div>
    </div>
  </section>
`);
