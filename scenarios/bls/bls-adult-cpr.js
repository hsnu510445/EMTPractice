SCENARIOS.push({
  id:"bls-adult-cpr", category:"bls", difficulty:2,
  title:"路倒無意識成人：CPR與AED",
  summary:"路人倒地無反應，練習成人單人施救的CPR與AED標準流程，並實際跑一次完整的CPR模擬。",
  steps:[
    {type:"action", scene:"路人發現一名中年男性倒在路邊，你路過上前查看。",
      prompt:"第一步？",
      correct:{tool:"sceneCheck",target:"scene",explain:"任何急救行動前都先確認現場安全。"},
      mistakes:[]},
    {type:"action", scene:"現場安全，你靠近拍肩呼喚「先生你還好嗎」，無反應。",
      prompt:"下一步？",
      correct:{tool:"callHelp",target:"scene",explain:"確認無反應後應立即啟動緊急醫療系統並取得AED，同時準備評估呼吸脈搏。"},
      mistakes:[]},
    {type:"emergency", timeLimit:8, randomChance:0.4,
      scene:"你正準備檢查患者的呼吸與脈搏，一位情緒崩潰的家屬突然衝過來，想把他搖醒。",
      question:"你會怎麼處理？",
      choices:[
        {text:"一邊繼續你的評估流程，一邊請旁人協助安撫並暫時帶開這位家屬，避免搖晃影響你的判斷", correct:true, explain:"評估與急救流程不能被中斷，同時請其他人協助安撫家屬，是兼顧現場情緒與病人安全的做法。"},
        {text:"先放下手邊的評估，花時間好好安慰這位家屬，等他情緒穩定一點再繼續", correct:false, explain:"這時候評估與急救的時效性優先，不應該暫停評估流程去安撫家屬。"},
        {text:"大聲要求家屬立刻閉嘴、退到一邊去，不然無法專心評估", correct:false, explain:"強硬的態度可能讓現場情緒更失控，也不利於後續配合。"},
        {text:"讓家屬繼續搖晃患者，順便觀察搖晃後患者有沒有反應", correct:false, explain:"搖晃可能加重潛在的頸椎或其他傷害，不應該讓未受訓練的人這樣做。"}
      ]},
    {type:"choice", scene:"有人已去打119拿AED，你檢查發現沒有正常呼吸（僅有喘息）且無脈搏。",
      question:"成人胸部按壓的正確深度與速率大約是？",
      choices:[
        {text:"深度至少5公分（不超過6公分），速率每分鐘100-120次", correct:true, explain:"這是成人CPR按壓的標準參考值，等一下實際模擬按壓時會用到這個節奏。"},
        {text:"深度2公分，速率60次", correct:false, explain:"深度與速率都不足。"},
        {text:"深度10公分，速率150次", correct:false, explain:"超過建議範圍。"},
        {text:"深度不重要只要速率夠快", correct:false, explain:"深度與速率同樣重要。"}
      ]},
    {type:"action", scene:"確認無正常呼吸且無脈搏，你決定立即開始CPR。同伴（小美）在旁邊，你們兩人現在要分工合作，系統會隨機指派你是主手還是副手。",
      prompt:"開始完整的CPR流程（含AED）",
      cprSim:true,
      correct:{tool:"cpr",target:"chest",explain:"雙人施救時，主手負責胸部按壓維持30:2循環，副手負責準備並操作AED、確保分析與電擊前大家都離手，兩人視體力狀況適時換手，減少按壓中斷。"},
      mistakes:[]}
  ]
});
