SCENARIOS.push({
  id:"special-hypoglycemia-advanced", category:"advanced", difficulty:2,
  title:"冒冷汗的糖尿病患者",
  summary:"練習低血糖的快速辨識、意識與吞嚥評估，並認識 EMT2 依規範給予靜脈葡萄糖的進階處置。",
  steps:[
    {type:"action", scene:"一名64歲糖尿病患者在家中坐倒，家屬說他剛打完胰島素後沒有吃午餐。現場安全，患者滿頭冷汗。",
      prompt:"接近患者前？",
      correct:{tool:"sceneCheck",target:"scene",explain:"先確認現場安全與基本防護，再接觸患者。"},mistakes:[]},
    {type:"action", scene:"患者對聲音反應遲鈍，但仍能睜眼；皮膚濕冷。",
      prompt:"你要先做哪項快速評估？",
      correct:{tool:"verbalCheck",target:"patient",explain:"先確認意識反應，並同步評估氣道、呼吸與循環是否受到威脅。"},mistakes:[]},
    {type:"action", scene:"患者能吞嚥，也能用簡短句子回答問題。",
      prompt:"你會測量什麼？",
      correct:{tool:"glucometer",target:"leftArm",altTargets:["rightArm"],reading:"血糖 48 mg/dL",explain:"糖尿病患者出現冒冷汗與意識改變時，應盡快測量血糖。"},mistakes:[]},
    {type:"choice", scene:"血糖為48 mg/dL，患者清醒且吞嚥功能正常。",
      question:"目前最適當的處置方向？",
      choices:[
        {text:"協助患者口服含糖物，持續觀察意識與呼吸，並安排送醫評估",correct:true,explain:"清醒且能安全吞嚥的低血糖患者，可依現場規範協助口服糖分並重新評估。"},
        {text:"【EMT2限定】建立靜脈路徑並依醫囑給予葡萄糖，同時持續監測",correct:false,explain:"這是具備相應資格、訓練與醫療指導時的進階處置，不能取代目前可執行的安全口服處置。"},
        {text:"讓患者平躺睡一下，等血糖自己恢復",correct:false,explain:"低血糖可能快速惡化，不能用睡覺取代處置與監測。"},
        {text:"患者看起來只是肚子餓，先讓他自己走到廚房找食物",correct:false,explain:"患者已出現意識改變，不應讓他自行走動增加跌倒與惡化風險。"}
      ]},
    {type:"action", scene:"患者吃下含糖物後逐漸清醒，但仍有些虛弱。",
      prompt:"你應持續？",
      correct:{tool:"ongoingMonitor",target:"patient",explain:"低血糖可能再次發作，需持續監測意識、呼吸與整體狀況，並完成送醫交班。"},mistakes:[]}
  ]
});