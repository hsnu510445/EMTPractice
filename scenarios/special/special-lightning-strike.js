SCENARIOS.push({
  id:"special-lightning-strike", category:"special", difficulty:3,
  title:"雷擊後倒地的登山隊",
  summary:"登山隊多人遭雷擊倒地，練習雷擊傷患特有的「反向檢傷」判斷原則。",
  steps:[
    {type:"action", scene:"雷雨中一支五人登山隊在稜線上遭雷擊，你是第一批趕到的人，遠處雷聲隆隆，天空還在閃電。",
      prompt:"你會先做什麼？",
      correct:{tool:"sceneCheck",target:"scene",
        explain:"雷擊現場的雷雨可能還沒結束，稜線等高處再次遭雷擊的風險仍在，應先評估是否需要先移動到相對安全的低處，再開始處置傷患，避免施救者也成為下一個受害者。"},
      mistakes:[{tool:"cpr",target:"chest",explain:"還沒確認現場安全前貿然開始處置，可能讓自己也暴露在再次遭雷擊的風險中。"}]},
    {type:"choice", scene:"移動到相對安全的地方後，你清點人數：三人意識清楚、驚魂未定地坐在地上呻吟，另外兩人倒地一動也不動、沒有呼吸也沒有反應。你只有一個人，還在等待其他隊友與救援抵達。",
      question:"人力有限的情況下，你會優先處理誰？",
      choices:[
        {text:"優先處理沒有呼吸、看似死亡的兩人，立即開始CPR；雷擊造成的心跳停止常是暫時性的心臟電生理紊亂，及時急救有機會恢復，而還有反應的三人相對當下較為穩定", correct:true, explain:"這正是雷擊傷患檢傷與一般大量傷患檢傷相反的地方，稱為「反向檢傷」：看似死亡者優先，因為雷擊心跳停止的可逆性通常較高。"},
        {text:"優先處理還有反應、比較痛苦呻吟的三人，因為他們比較能清楚表達自己的不舒服", correct:false, explain:"還有反應的傷患當下呼吸循環都還在運作，相對沒有立即死亡風險，不應該優先於沒有呼吸的兩人。"},
        {text:"跟一般大量傷患檢傷原則一樣，看起來沒有呼吸的兩人直接視為無法挽回，優先照顧其他三人", correct:false, explain:"雷擊傷患的處置原則跟一般大量傷患檢傷相反，看似死亡者反而應該優先急救。"},
        {text:"應該先花時間確認到底是誰被雷直接擊中、誰只是被波及，再決定處理順序", correct:false, explain:"現場沒有呼吸的傷患需要立即急救，不應該花時間在事後才能釐清的細節上。"}
      ]},
    {type:"action", scene:"你決定立即對其中一名沒有呼吸反應的隊友開始急救，其他隊友陸續趕上協助。",
      prompt:"開始完整的急救流程（含AED）",
      cprSim:true,
      correct:{tool:"cpr",target:"chest",
        explain:"雷擊造成的心跳停止，及早開始高品質CPR並儘快使用AED，是提高存活機會的關鍵，不要因為傷患「看起來已經沒救」而放棄。"},
      mistakes:[]},
    {type:"action", scene:"急救告一段落，其他隊友也協助照顧另外三人。",
      prompt:"接下來你會做什麼？",
      correct:{tool:"ongoingMonitor",target:"patient",
        explain:"持續監測所有傷患的意識、呼吸與循環狀況，雷擊傷患即使當下清醒，仍可能出現遲發性的神經或心臟症狀變化。"},
      mistakes:[]},
    {type:"action", scene:"救援隊抵達，準備分批後送。",
      prompt:"交班時你會特別說明什麼？",
      correct:{tool:"handoverReport",target:"scene",
        explain:"交班時要說明每位傷患遭雷擊後的意識與呼吸循環變化、急救經過與反向檢傷的處置原則，讓後續醫療團隊掌握完整狀況。"},
      mistakes:[]}
  ]
});
