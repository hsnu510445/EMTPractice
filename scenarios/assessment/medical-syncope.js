SCENARIOS.push({
  id:"medical-syncope", category:"assessment", difficulty:2,
  title:"超商突然昏倒又醒來的男子",
  summary:"練習暈厥後初步評估、生命徵象與病史詢問，避免因患者已恢復意識就忽略危險原因。",
  steps:[
    {type:"action", scene:"超商店員表示一名58歲男性剛才突然倒下，約30秒後自己醒來，目前坐在地上。",
      prompt:"抵達後第一步？",
      correct:{tool:"sceneCheck",target:"scene",explain:"先確認現場安全，再進行病人評估。"},mistakes:[]},
    {type:"action", scene:"患者現在清醒，可以正常回答問題，但臉色稍白。",
      prompt:"你會先做什麼？",
      correct:{tool:"generalImpression",target:"patient",giRelevant:["patient:distress"],giFindings:{"patient:distress":"患者清醒，臉色蒼白，表示剛才突然失去意識約30秒"},explain:"建立整體印象並確認患者目前狀態，不能因恢復意識就直接結束評估。"},mistakes:[]},
    {type:"action", scene:"患者坐著休息。",
      prompt:"你會測量什麼？",
      correct:{tool:"bloodPressure",target:"leftArm",altTargets:["rightArm"],reading:"88/58 mmHg，脈搏 112次/分",explain:"暈厥患者應取得生命徵象，低血壓與心搏過速可能提示仍有循環問題。"},mistakes:[]},
    {type:"choice", scene:"患者說「我站起來拿東西後突然眼前一黑，醒來就躺在地上」，但沒有胸痛。",
      question:"你接下來的處理？",
      choices:[
        {text:"繼續完整詢問事件經過、病史與用藥，並持續監測，不因恢復意識就忽略原因",correct:true,explain:"暈厥可能有多種原因，需要進一步評估並觀察是否再次惡化。"},
        {text:"既然已經醒來，就直接請他自己走回家休息",correct:false,explain:"患者剛發生短暫意識喪失且生命徵象異常，不應直接讓他自行離開。"},
        {text:"只詢問有沒有撞到頭，其他資訊都不需要",correct:false,explain:"事件經過、病史與用藥資訊同樣重要。"},
        {text:"讓患者立刻站起來測試是否真的好了",correct:false,explain:"目前血壓偏低，不應用突然站立來測試患者。"}
      ]},
    {type:"action", scene:"患者表示最近開始服用新的降血壓藥。",
      prompt:"你會使用什麼方式進一步收集資訊？",
      correct:{tool:"history",target:"patient",reading:"近期開始使用新的降血壓藥，今天起身後發生短暫意識喪失",explain:"使用結構化病史詢問了解用藥、過去病史、事件經過等資訊。"},mistakes:[]},
    {type:"action", scene:"病史問完後，你想確認有沒有遺漏其他項目。",
      prompt:"你會做什麼？",
      correct:{tool:"secondaryAssessment",target:"patient",explain:"用二次評估的完整骨架（生命徵象、病史、身體檢查、後續處置計畫）檢查一遍，確認暈厥評估沒有遺漏重點項目。"},
      mistakes:[]},
    {type:"action", scene:"等待送醫期間。",
      prompt:"你會做什麼？",
      correct:{tool:"ongoingMonitor",target:"patient",explain:"持續監測意識、呼吸與生命徵象，若再次改變應立即重新評估。"},mistakes:[]}
  ]
});
