document.write(`
  <section id="commandListScreen" class="hidden">
    <button class="btn btn-outline" id="homeFromCommandListBtn" style="margin-bottom:14px;">← 返回首頁</button>
    <div class="grid" id="commandGrid"></div>
  </section>

  <section id="commandPlayScreen" class="hidden">
    <div class="game-header">
      <button class="btn btn-outline" id="backFromCommandPlayBtn">← 返回列表</button>
    </div>
    <div class="scene-box">
      <div class="scene-text" id="commandIntro"></div>
      <div class="command-crew-box" id="commandCrewBox"></div>
      <div class="command-task-list" id="commandTaskList"></div>
      <div id="commandLivePanel" class="command-live-panel hidden">
        <div class="command-live-topline">
          <span id="commandRoundLabel"></span>
          <span>病患穩定度 <b id="commandStability">100</b>%</span>
          <span>團隊信任 <b id="commandTrust">100</b>%</span>
        </div>
        <div class="command-radio" id="commandRadio"></div>
        <div class="command-choice-list" id="commandChoiceList"></div>
        <div class="command-event-log" id="commandEventLog"></div>
      </div>
      <div class="next-row"><button class="btn btn-primary" id="commandSubmitBtn">送出分工</button></div>
    </div>
  </section>

  <section id="commandResultScreen" class="hidden">
    <div class="result-box">
      <div style="font-size:0.9rem;color:var(--muted);">分工結果</div>
      <div class="big-score" id="commandScore"></div>
      <div id="commandResultList" style="margin-top:10px;"></div>
      <div class="result-actions">
        <button class="btn btn-primary" id="commandReplayBtn">再挑戰一次</button>
        <button class="btn btn-outline" id="commandToListBtn">返回列表</button>
      </div>
    </div>
  </section>
`);
