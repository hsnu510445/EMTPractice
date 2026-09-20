SCENARIOS.push({
  id:"trauma-crush-injury", category:"trauma", difficulty:3,
  title:"倒塌結構下的壓砸傷",
  summary:"練習受困現場安全、壓砸傷的循環神經評估、保暖與不要擅自移動。",
  steps:[
    {type:"action",scene:"倉庫貨架倒塌，一名患者的雙腿被重物壓住，周圍仍有不穩定貨架。",prompt:"接近前？",correct:{tool:"sceneCheck",target:"scene",explain:"先確認結構穩定、二次坍塌與救援動線，不能為了快速接觸而進入危險區。"},mistakes:[]},
    {type:"action",scene:"患者清醒、呼吸尚可，表示雙腳麻木且右腳越來越冰冷，重物尚未移除。",prompt:"你要先評估什麼？",correct:{tool:"pulseCheck",target:"rightLeg",reading:"右腳遠端脈搏微弱，腳趾活動減少且感覺變鈍",explain:"記錄受壓肢體的遠端循環、活動與感覺，並和另一側比較；不要要求患者反覆用力掙扎。"},mistakes:[]},
    {type:"choice",scene:"患者詢問能不能自己把腿拉出來，隊友尚未完成支撐與救援計畫。",question:"正確做法？",choices:[
      {text:"維持現場安全與患者穩定，呼叫適當救援資源，不自行突然移除重物",correct:true,explain:"壓砸傷需要協調救援與醫療資源，突然移動可能造成二次傷害與現場危險。"},
      {text:"叫患者用最大力氣把腿硬拉出來",correct:false,explain:"不應讓受困患者自行掙扎造成更多組織損傷。"},
      {text:"先把重物抬開再評估現場是否安全",correct:false,explain:"救援者與現場安全必須先於搬移重物。"},
      {text:"因為皮膚沒有大量出血，所以可以不必記錄遠端循環",correct:false,explain:"壓砸傷可能造成深部組織與神經血管損傷，必須記錄變化。"}
    ]},
    {type:"action",scene:"救援隊正在穩定結構並準備協同移除重物，患者開始顯得焦躁。",prompt:"等待期間？",correct:{tool:"ongoingMonitor",target:"patient",explain:"持續監測意識、呼吸、循環與患肢神經血管狀態，記錄重物移除前後的變化並交班。"},mistakes:[]}
  ]
});
