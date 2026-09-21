SCENARIOS.push({
  id:"advanced-inhalation-burn", category:"advanced", difficulty:3,
  title:"火場外表不嚴重、聲音卻沙啞的患者",
  summary:"高級救護練習：辨識吸入性傷害警訊、給氧與快速後送優先順序。",
  steps:[
    {type:"action",scene:"公寓廚房起火後已由消防人員控制，患者在門外咳嗽，衣物只有小範圍燒焦。",prompt:"接近前的第一步？",correct:{tool:"sceneCheck",target:"scene",explain:"確認火勢、煙霧、電氣與建築物安全，並依現場指揮進入安全區域。"},mistakes:[]},
    {type:"action",scene:"患者清醒但聲音沙啞，鼻毛燒焦，臉部有煙灰，說喉嚨越來越緊。",prompt:"你要優先評估什麼？",correct:{tool:"lookListenFeel",target:"chest",explain:"要立即評估呼吸品質與呼吸窘迫，同時把聲音沙啞、臉部燒傷與煙霧暴露視為吸入性傷害警訊。"},mistakes:[]},
    {type:"action",scene:"患者呼吸急促但仍能配合，血氧設備尚未接上，現場有氧氣鋼瓶。",prompt:"可執行的立即支持？",correct:{tool:"oxygenMask",target:"head",explain:"依患者呼吸狀況選擇適當給氧裝置，並持續觀察意識、呼吸功與變化。"},mistakes:[]},
    {type:"choice",scene:"給氧後患者暫時能說話，但聲音更沙啞，吞嚥困難且呼吸功增加。",question:"下一步最適當的方向？",choices:[
      {text:"維持呼吸支持、立即請求高級支援並快速送醫，不因短暫改善而延誤",correct:true,explain:"吸入性傷害可能進行性惡化，應持續支持呼吸並儘早讓能處理氣道的團隊接手。"},
      {text:"【EMT2限定】在沒有確認資格與醫療指導時自行進行侵入性氣道處置",correct:false,explain:"進階或侵入性氣道處置必須符合人員資格、訓練、裝備與醫療指導。"},
      {text:"因為皮膚燒傷面積不大，留在現場觀察半小時即可",correct:false,explain:"吸入性傷害的嚴重度不能只用皮膚燒傷面積判斷，聲音改變與呼吸惡化需要快速後送。"},
      {text:"讓患者躺平並給水，減輕喉嚨灼熱感",correct:false,explain:"呼吸道可能腫脹，口服液體有吸入風險，也不應以喝水取代呼吸道評估與支持。"}
    ]},
    {type:"action",scene:"搬運途中患者開始嗜睡，呼吸變得更淺。",prompt:"你要持續做什麼？",correct:{tool:"ongoingMonitor",target:"patient",explain:"持續重新評估意識、呼吸道與呼吸品質，並將惡化趨勢清楚通報接收端。"},mistakes:[]}
  ]
});
