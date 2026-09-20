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
