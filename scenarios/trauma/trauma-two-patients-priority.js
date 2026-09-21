SCENARIOS.push({
  id:"trauma-two-patients-priority", category:"trauma", difficulty:3,
  title:"同時兩位傷患：你會先救誰",
  summary:"機車與轎車相撞，兩位傷患同時倒地，支援尚未抵達，你必須獨自判斷誰要優先處理，判斷錯誤可能讓原本能救的傷患錯失搶救時機。",
  steps:[
    {type:"action", scene:"機車與轎車相撞，你是第一個抵達的救護人員，支援還在路上。現場有兩位傷患：機車騎士倒在路邊、轎車駕駛坐在車旁。",
      prompt:"你會先做什麼？",
      correct:{tool:"sceneCheck",target:"scene",explain:"確認車流已管制、雙方車輛穩定，兩位傷患所在位置都相對安全，才能開始判斷處理順序。"},
      mistakes:[]},
    {type:"choice", scene:"機車騎士大聲喊痛、手臂明顯變形，意識清楚；轎車駕駛安靜坐在地上，沒有明顯外傷，但看起來有點恍神、沒什麼反應。",
      question:"你只有一個人，會先評估誰？",
      choices:[
        {text:"先評估看起來安靜、恍神沒反應的轎車駕駛，意識不佳可能代表更立即的呼吸或腦部問題；大聲呼痛反而顯示氣道與意識都還算完整", correct:true, explain:"「安靜的傷患」常常比「大聲喊痛的傷患」更需要優先注意，意識程度下降可能代表更嚴重、更立即的生命威脅，這是檢傷判斷中容易被忽略的重點。"},
        {text:"先處理喊痛的機車騎士，因為他表現出的痛苦最明顯，看起來最需要幫助", correct:false, explain:"表現最明顯痛苦的傷患不一定是最危急的，安靜恍神的傷患可能隱藏更嚴重的問題，不應該只憑外在表現判斷。"},
        {text:"先處理手臂明顯變形的機車騎士，因為外觀上的骨折傷勢最容易判斷、最需要立即固定", correct:false, explain:"骨折雖然需要處理，但通常不是立即威脅生命的問題，意識程度改變的傷患往往更優先。"},
        {text:"兩位一起評估，來回穿梭於兩人之間交替進行處置，這樣比較公平也不會漏掉任何人", correct:false, explain:"同時交替處理兩位傷患實際上會讓兩邊都做不完整，應該先判斷出真正優先的一位，集中處理。"}
      ]},
    {type:"action", scene:"你決定先評估轎車駕駛。",
      prompt:"你會先做什麼？",
      correct:{tool:"generalImpression",target:"patient",
        giRelevant:["patient:distress","patient:posture"],
        giFindings:{
          "patient:distress":"對你的呼喚反應遲緩，眼神有點渙散，呼吸看起來有點喘",
          "patient:posture":"坐姿有點歪斜，需要旁邊的車體撐著才不會倒下"
        },
        explain:"建立整體印象，確認他的意識與整體狀態比外觀看起來更不穩定。"},
      mistakes:[]},
    {type:"action", scene:"你評估他的呼吸與意識。",
      prompt:"你會做什麼檢查？",
      correct:{tool:"lookListenFeel",target:"chest",respRate:28,
        reading:"28次/分，呼吸略淺，合併輕微喘鳴",
        explain:"確認呼吸速率與品質，恍神合併呼吸異常需要優先介入處理。"},
      mistakes:[]},
    {type:"action", scene:"呼吸評估後。",
      prompt:"你會給予？",
      correct:{tool:"oxygenMask",target:"head",
        oxygenSpec:{device:"simpleMask", flowMin:6, flowMax:10},
        explain:"意識程度不佳合併呼吸異常，應給予氧氣支持並持續密切觀察。"},
      mistakes:[]},
    {type:"choice", scene:"轎車駕駛穩定給氧觀察中，機車騎士仍在旁邊喊痛，同伴這時剛好趕到現場支援。",
      question:"你會怎麼分配接下來的工作？",
      choices:[
        {text:"請同伴接手評估與處理機車騎士的手臂變形（固定、止痛安撫），自己則繼續留在轎車駕駛身邊，持續監測意識與呼吸變化", correct:true, explain:"支援到場後，應該讓兩位傷患都能同時被照顧到，但仍要由原本熟悉狀況的人繼續負責較不穩定的那一位，維持照護的連續性。"},
        {text:"自己去處理機車騎士的骨折，請剛到場、還不清楚狀況的同伴接手轎車駕駛", correct:false, explain:"轎車駕駛狀況相對不穩定，應該由已經掌握他狀況的你繼續照顧，貿然交接可能讓重要的變化被忽略。"},
        {text:"請同伴先在旁邊待命，等你把轎車駕駛完全處理告一段落後，再一起處理機車騎士", correct:false, explain:"支援人力已經到場，應該善用人力同時照顧兩位傷患，而不是讓同伴閒置等待。"},
        {text:"兩人一起先處理機車騎士的骨折，因為變形的傷勢比較好處理，轎車駕駛先讓他自己坐著休息", correct:false, explain:"轎車駕駛的意識與呼吸狀況相對不穩定，不應該被晾在一旁等待，仍需要持續有人照顧與監測。"}
      ]},
    {type:"action", scene:"分工後，你持續照顧轎車駕駛，準備送醫。",
      prompt:"交班時你會特別說明什麼？",
      correct:{tool:"handoverReport",target:"scene",
        explain:"交班時要說明現場有兩位傷患、你的檢傷判斷理由、轎車駕駛的意識與呼吸變化趨勢，讓醫院與後續到場的救護資源都能掌握完整狀況。"},
      mistakes:[]}
  ]
});
