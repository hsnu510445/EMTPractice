SCENARIOS.push({
  id:"advanced-acs", category:"advanced", difficulty:3,
  title:"休息後仍持續胸痛的患者",
  summary:"高級救護練習：用病史與生命徵象辨識高風險胸痛，並處理進階藥物選項的限制。",
  steps:[
    {type:"action",scene:"58歲患者坐在家中沙發上，胸口有壓迫感並冒冷汗；家屬說症狀已持續25分鐘。",prompt:"第一步？",correct:{tool:"sceneCheck",target:"scene",explain:"先確認現場安全與防護，再接觸患者進行初步評估。"},mistakes:[]},
    {type:"action",scene:"患者清醒，能說完整句子，但表示胸痛延伸到左肩，休息沒有改善。",prompt:"你應先取得哪類重要資訊？",correct:{tool:"history",target:"patient",explain:"用OPQRST釐清胸痛特徵、時間與轉移位置，並同步詢問SAMPLE危險病史。"},mistakes:[]},
    {type:"action",scene:"患者皮膚濕冷、脈搏快，仍能配合評估。",prompt:"要建立哪項基準資料？",correct:{tool:"bloodPressure",target:"leftArm",altTargets:["rightArm"],reading:"92/60 mmHg，脈搏 116次/分",explain:"生命徵象能協助辨識循環不穩定，也方便後續比較趨勢。"},mistakes:[]},
    {type:"choice",scene:"患者仍持續胸痛，血壓偏低，家屬拿出患者平常使用的藥物。",question:"關於下一步，哪個說法最安全？",choices:[
      {text:"維持舒適姿勢、給予符合規範的呼吸支持、持續監測並快速送醫",correct:true,explain:"高風險胸痛合併低血壓時，先維持基本生命支持與快速後送，不應因嘗試藥物而延誤。"},
      {text:"既然是患者平常自己在用的藥，直接協助他服用，看看能不能緩解胸痛",correct:false,explain:"協助患者使用他自己的藥物（如硝酸甘油）在血壓正常時通常屬於EMT1可協助的範圍，但這類藥物會使血壓進一步下降；患者目前血壓已經偏低，此時給予可能造成更嚴重的低血壓與休克，應先確認血壓是否適合，不能看到藥物就直接協助服用。"},
      {text:"讓患者自行走到車上，活動可以幫助血液循環",correct:false,explain:"疑似急性冠心症且循環不穩定者不應自行走動，應減少耗氧與跌倒風險。"},
      {text:"先等待胸痛完全消失，再決定是否需要送醫",correct:false,explain:"持續胸痛與低血壓是高風險警訊，不能等待症狀自行消失。"}
    ]},
    {type:"action",scene:"患者在搬運前突然更嗜睡，但仍有呼吸。",prompt:"送醫前你要做什麼？",correct:{tool:"ongoingMonitor",target:"patient",explain:"重新確認意識、呼吸、脈搏與血壓，並將惡化時間與處置完整交班。"},mistakes:[]}
  ]
});
