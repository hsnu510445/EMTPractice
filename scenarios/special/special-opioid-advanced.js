SCENARIOS.push({
  id:"special-opioid-advanced", category:"advanced", difficulty:2,
  title:"瞳孔縮小且呼吸變慢的患者",
  summary:"練習鴉片類過量的呼吸優先原則，並辨識 EMT2 依規範給予拮抗劑的進階選項。",
  steps:[
    {type:"action", scene:"你在房間發現一名30歲患者倒在床邊，旁邊有不明藥物包裝，房內沒有明顯危險。",
      prompt:"靠近前？",
      correct:{tool:"sceneCheck",target:"scene",explain:"先確認現場安全並留意藥物、針具或其他暴露風險。"},mistakes:[]},
    {type:"action", scene:"患者對聲音無反應，胸部起伏很慢，嘴唇發紫。",
      prompt:"你要立即評估什麼？",
      correct:{tool:"lookListenFeel",target:"chest",respRate:5,reading:"呼吸約5次/分，明顯呼吸抑制",explain:"嚴重呼吸抑制是最立即的生命威脅，必須優先處理呼吸道與通氣。"},mistakes:[]},
    {type:"choice", scene:"患者呼吸約每分鐘5次、瞳孔明顯縮小，旁邊發現疑似鴉片類藥物。",
      question:"處置優先順序為何？",
      choices:[
        {text:"立即打開呼吸道、提供適當呼吸支持並啟動緊急送醫，同時持續監測",correct:true,explain:"無論藥物種類是否已確認，呼吸支持都是最優先的救命處置。"},
        {text:"【EMT2限定】依醫療指導給予 naloxone 等鴉片受體拮抗劑，但仍不能延誤通氣與後送",correct:false,explain:"拮抗劑須由具備相應資格者依當地規範與醫療指導執行，且不能取代呼吸支持。"},
        {text:"先讓患者喝大量的水，把藥物沖淡",correct:false,explain:"意識不清患者有吸入風險，口服液體不能處理呼吸抑制。"},
        {text:"等患者自行醒來後，再詢問他吃了什麼藥",correct:false,explain:"等待會延誤呼吸支持，病史可由家屬或現場線索同步取得。"}
      ]},
    {type:"action", scene:"你已開始呼吸支持，患者短暫改善但仍昏沉。",
      prompt:"接下來？",
      correct:{tool:"ongoingMonitor",target:"patient",explain:"拮抗劑效果可能短於藥物作用時間，需持續監測並準備再次惡化。"},mistakes:[]}
  ]
});