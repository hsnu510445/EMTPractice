SCENARIOS.push({
  id:"advanced-trauma-shock", category:"advanced", difficulty:3,
  title:"車禍後越來越安靜的患者",
  summary:"高級救護練習：辨識隱性出血與失血性休克，練習保暖、快速後送與進階處置界線。",
  realCase:{title:"高級救護教材主題：創傷休克",summary:"本題強調高能量機轉、早期休克徵象、保暖與快速後送的整合判斷。",learningPoint:"正常或接近正常的早期數值不能排除嚴重失血；要看整體趨勢、皮膚、意識與機轉，並避免現場延誤。",source:"reference/高級救護技術員教科書.pdf"},
  steps:[
    {type:"action",scene:"小客車撞上護欄，車內患者已由消防人員協助脫困，路旁仍有來車快速通過。",prompt:"接近前先做什麼？",correct:{tool:"sceneCheck",target:"scene",explain:"先確認交通、車輛與現場管制，必要時等待其他單位完成安全警戒。"},mistakes:[]},
    {type:"action",scene:"患者清醒但臉色蒼白，腹部與骨盆疼痛，沒有看到大量外出血。",prompt:"初步評估要特別注意什麼？",correct:{tool:"generalImpression",target:"patient",explain:"高能量機轉加上蒼白、腹盆腔疼痛，即使沒有外出血，也要高度警覺內出血與休克。"},mistakes:[]},
    {type:"action",scene:"患者回答變慢，皮膚濕冷，脈搏快速微弱。",prompt:"要取得哪項資料作為比較基準？",correct:{tool:"bloodPressure",target:"leftArm",altTargets:["rightArm"],reading:"94/62 mmHg，脈搏 124次/分",explain:"生命徵象與意識變化要一起追蹤，不能只因血壓尚未極低就排除休克。"},mistakes:[]},
    {type:"choice",scene:"患者疑似骨盆與腹部受傷，越來越嗜睡；現場有人建議先花時間完整檢查四肢。",question:"最適當的策略？",choices:[
      {text:"優先處理立即威脅、保暖、減少不必要搬動並快速後送，途中持續監測",correct:true,explain:"疑似內出血與休克時，應控制可處理的立即問題並縮短到院時間，不能讓詳細檢查延誤後送。"},
      {text:"【EMT2限定】未依當地規範與醫療指導，自行建立靜脈路徑並大量輸液",correct:false,explain:"靜脈路徑與輸液須由具資格人員依醫療指導及現場規範執行，不能取代快速後送。"},
      {text:"讓患者喝水補充循環，並請他站起來測試是否能走路",correct:false,explain:"疑似內出血與意識惡化者有吸入及跌倒風險，不應口服液體或自行走動。"},
      {text:"因為沒有大量外出血，先在現場觀察半小時再決定",correct:false,explain:"內出血可能沒有外觀傷口，蒼白、濕冷、快速微弱脈搏與意識惡化都支持立即後送。"}
    ]},
    {type:"action",scene:"搬運途中患者更嗜睡，呼吸變淺，保暖毯已覆蓋。",prompt:"你應持續什麼？",correct:{tool:"ongoingMonitor",target:"patient",explain:"持續重評意識、呼吸、循環與處置效果，並將趨勢與高能量機轉清楚通報醫院。"},mistakes:[]}
  ]
});
