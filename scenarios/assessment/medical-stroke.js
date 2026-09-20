SCENARIOS.push({
  id:"medical-stroke", category:"assessment", difficulty:2,
  title:"突然說話不清的老人",
  summary:"家中長輩突然出現臉歪、單側無力與說話不清，練習快速辨識中風警訊與確認最後正常時間。",
  steps:[
    {type:"action", scene:"家屬表示72歲男性早餐時突然說話含糊，右手拿不住杯子。患者清醒但表情焦急。",
      prompt:"抵達後第一步？",
      correct:{tool:"sceneCheck",target:"scene",explain:"先確認現場安全與基本防護，再接近病人進行初步評估。"}, mistakes:[]},
    {type:"action", scene:"患者可以回應你，但說話含糊，右側手臂無力。",
      prompt:"你會先做什麼快速篩檢？",
      correct:{tool:"fastStrokeCheck",target:"head",explain:"出現突發臉部、手臂與語言異常時，應快速進行中風警訊評估。"}, mistakes:[]},
    {type:"choice", scene:"患者微笑時右側嘴角明顯下垂，雙手平舉約10秒後右手逐漸下垂，說話也不清楚。",
      question:"這組表現最需要優先懷疑？",
      choices:[
        {text:"急性中風，應立即記錄最後正常時間並儘速啟動送醫流程",correct:true,explain:"突發臉部不對稱、單側肢體無力與語言異常是重要的中風警訊。"},
        {text:"只是年紀大造成的肌力下降，可以先休息觀察",correct:false,explain:"突然發生的單側無力不能當作一般老化處理。"},
        {text:"比較像單純疲勞，讓患者躺下睡一覺即可",correct:false,explain:"突發神經學異常需要立即評估與送醫。"},
        {text:"先讓患者喝水看看是否能改善說話",correct:false,explain:"意識與吞嚥狀況尚未完整確認前，不應自行給患者喝水。"}
      ]},
    {type:"action", scene:"家屬說患者今天早上7點吃早餐時還完全正常，約7點25分開始講話不清楚。",
      prompt:"這個資訊你會如何處理？",
      correct:{tool:"history",target:"patient",reading:"家屬表示最後一次完全正常時間約07:00，症狀約07:25出現",explain:"中風評估中特別重要的是最後一次被確認正常的時間，應清楚記錄並交班。"},mistakes:[]},
    {type:"action", scene:"患者仍清醒，但開始噁心。你準備持續評估。",
      prompt:"你會做什麼？",
      correct:{tool:"ongoingMonitor",target:"patient",explain:"神經症狀可能變化，應持續監測意識、呼吸與生命徵象並儘速送醫。"},mistakes:[]},
    {type:"action", scene:"準備送醫交班。",
      prompt:"交班時最重要的資訊之一是？",
      correct:{tool:"handoverReport",target:"scene",explain:"應交代突發神經症狀、FAST評估結果，以及最後一次完全正常的時間。"},mistakes:[]}
  ]
});
