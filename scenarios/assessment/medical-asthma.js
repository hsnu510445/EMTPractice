SCENARIOS.push({
  id:"medical-asthma", category:"assessment", difficulty:2,
  title:"喘到只能講短句的年輕人",
  summary:"練習辨識嚴重呼吸困難、評估呼吸狀態、協助給氧並持續監測。",
  steps:[
    {type:"action", scene:"你到達一名24歲男性住家，他坐在椅子上身體前傾，明顯喘息，只能講出短句。",
      prompt:"靠近前你先做什麼？",
      correct:{tool:"sceneCheck",target:"scene",explain:"先確認環境安全與自身防護，再接近病人。"},mistakes:[]},
    {type:"action", scene:"患者表示自己有氣喘病史，現在胸口很緊，呼吸時有明顯喘鳴。",
      prompt:"你會先快速評估什麼？",
      correct:{tool:"lookListenFeel",target:"chest",respRate:30,reading:"呼吸30次/分，明顯喘鳴，只能說短句",explain:"快速評估呼吸速率、呼吸音、胸廓起伏與說話能力，以判斷呼吸困難程度。"},mistakes:[]},
    {type:"choice", scene:"患者呼吸30次/分，只能一次講3到4個字，鼻翼搧動且使用輔助呼吸肌。",
      question:"此時最重要的處置方向？",
      choices:[
        {text:"優先支持呼吸、依評估給氧並持續監測，必要時協助進一步呼吸處置",correct:true,explain:"明顯呼吸窘迫需要優先處理呼吸問題，而不是先花大量時間詢問完整病史。"},
        {text:"先讓患者平躺休息，等喘息自行緩解",correct:false,explain:"呼吸困難患者通常應採舒適且有利呼吸的姿勢，不應強迫平躺。"},
        {text:"先請患者喝大量冰水",correct:false,explain:"喝水不能解決目前的呼吸窘迫，也可能增加處置風險。"},
        {text:"只詢問過去一年發作幾次，不需要先處理呼吸",correct:false,explain:"病史重要，但當前明顯呼吸窘迫應先處理立即威脅生命的問題。"}
      ]},
    {type:"action", scene:"患者仍坐著喘，血氧尚未取得。",
      prompt:"你會協助他使用什麼？",
      correct:{tool:"pulseOximeter",target:"leftArm",reading:"SpO₂ 89%，脈搏 124次/分",explain:"取得血氧與脈搏數值可協助判斷呼吸狀況並追蹤變化。"},mistakes:[]},
    {type:"action", scene:"SpO₂偏低，患者仍明顯呼吸困難。",
      prompt:"此時可給予什麼支持？",
      correct:{tool:"oxygenMask",target:"head",oxygenSpec:{device:"nonRebreather",flowMin:10,flowMax:15},explain:"明顯低血氧與呼吸窘迫時可依訓練與單位規範提供適當氧氣支持。"},mistakes:[]},
    {type:"action", scene:"給予氧氣後仍需送醫。",
      prompt:"接下來？",
      correct:{tool:"ongoingMonitor",target:"patient",explain:"呼吸狀況可能快速變化，應持續監測呼吸、意識與血氧並儘速送醫。"},mistakes:[]}
  ]
});
