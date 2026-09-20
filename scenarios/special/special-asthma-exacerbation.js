SCENARIOS.push({
  id:"special-asthma-exacerbation", category:"special", difficulty:2,
  title:"夜間突然惡化的氣喘患者",
  summary:"練習氣喘惡化時的呼吸評估、姿勢、氧氣支持與持續監測。",
  steps:[
    {type:"action", scene:"晚上家中，一名28歲女性有氣喘病史，現在坐在床邊喘氣，說話時需要停下來換氣。",
      prompt:"第一步？",
      correct:{tool:"sceneCheck",target:"scene",explain:"確認現場安全與基本防護後開始評估。"},mistakes:[]},
    {type:"action", scene:"患者明顯喘鳴，呼吸急促，焦慮但仍能配合。",
      prompt:"你會評估呼吸嗎？",
      correct:{tool:"lookListenFeel",target:"chest",respRate:32,reading:"32次/分，呼吸急促且有喘鳴",explain:"快速確認呼吸速率、呼吸音與呼吸努力程度。"},mistakes:[]},
    {type:"action", scene:"患者說平躺更喘。",
      prompt:"你會協助她採什麼姿勢？",
      correct:{tool:"positionPatient",target:"patient",positionSpec:{position:"semiFowler"},explain:"讓患者採較舒適、利於呼吸的姿勢，避免強迫平躺。"},mistakes:[]},
    {type:"action", scene:"血氧測量顯示偏低，患者仍明顯喘。",
      prompt:"你會給予什麼支持？",
      correct:{tool:"oxygenMask",target:"head",oxygenSpec:{device:"nonRebreather",flowMin:10,flowMax:15},explain:"依患者狀況與單位規範提供氧氣支持並持續重新評估。"},mistakes:[]},
    {type:"choice", scene:"患者喘息稍微減輕，但仍只能講短句。",
      question:"接下來？",
      choices:[
        {text:"持續監測並儘速送醫，不能因暫時稍有改善就停止觀察",correct:true,explain:"氣喘惡化可能再次變嚴重，需持續評估。"},
        {text:"既然稍微改善，就取消送醫",correct:false,explain:"暫時改善不能排除再次惡化。"},
        {text:"讓患者獨自去洗澡放鬆",correct:false,explain:"患者仍有明顯呼吸症狀，不適合獨處。"},
        {text:"讓患者平躺睡覺觀察",correct:false,explain:"仍有呼吸困難時不應用睡眠取代監測。"}
      ]},
    {type:"action", scene:"等待送醫。",
      prompt:"你會持續？",
      correct:{tool:"ongoingMonitor",target:"patient",explain:"持續監測呼吸、意識、血氧與整體狀況。"},mistakes:[]}
  ]
});
