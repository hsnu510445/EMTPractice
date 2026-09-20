SCENARIOS.push({
  id:"trauma-child-scald", category:"trauma", difficulty:2,
  title:"幼兒熱水燙傷",
  summary:"練習兒童燙傷的現場安全、停止燒傷、適度冷卻、保暖與避免過度冷卻。",
  realCase:{title:"WHO 燒傷資料與兒童家庭燙傷",summary:"WHO指出燒傷常發生於家庭與工作場所，兒童是重要高風險族群；熱液、火焰與接觸熱物都是常見機轉。",learningPoint:"本題練習先停止燒傷、以流動清水冷卻、移除未黏附的衣物與飾品，並避免冰敷與長時間冷卻造成低體溫。",source:"https://www.who.int/news-room/fact-sheets/detail/burns"},
  steps:[
    {type:"action",scene:"幼兒在廚房打翻熱水，左手臂與胸前衣物被熱水浸濕，熱水壺仍在地上。",prompt:"接近前？",correct:{tool:"sceneCheck",target:"scene",explain:"先移除熱源並確認地面濕滑、玻璃與電器等危險，避免救援者與孩子再次受傷。"},mistakes:[]},
    {type:"action",scene:"孩子哭泣但能正常呼吸，衣物沒有黏在皮膚上，手腕戴著小手鍊。",prompt:"先做什麼？",correct:{tool:"removeClothingJewelry",target:"leftArm",explain:"移除附近未黏附的衣物與飾品，避免腫脹後造成壓迫；不要硬扯黏在皮膚上的衣物。"},mistakes:[]},
    {type:"action",scene:"燙傷仍疼痛，皮膚紅腫並有水泡，孩子開始發冷。",prompt:"你會如何處置？",correct:{tool:"coolBurn",target:"leftArm",explain:"以乾淨流動清水適度冷卻燙傷，同時注意保暖；不要使用冰塊、牙膏或油膏，也不要長時間沖到孩子失溫。"},mistakes:[]},
    {type:"choice",scene:"家人想把水泡刺破，並用冰袋直接壓在胸前燙傷處。",question:"哪個說法正確？",choices:[
      {text:"不要刺破水泡或直接放冰塊，覆蓋乾淨敷料並依傷勢送醫評估",correct:true,explain:"水泡與皮膚屏障應受到保護，冰塊可能加深組織傷害，兒童也要特別注意失溫。"},
      {text:"水泡越早刺破越容易恢復",correct:false,explain:"不應在現場自行刺破水泡。"},
      {text:"冰敷越久越能降低燒傷深度",correct:false,explain:"冰可能造成額外組織傷害，且兒童容易失溫。"},
      {text:"用牙膏覆蓋即可，不需要送醫",correct:false,explain:"偏方可能污染傷口，燒傷範圍與位置仍需適當醫療評估。"}
    ]},
    {type:"action",scene:"燙傷已冷卻並覆蓋，孩子仍在哭，但呼吸與意識穩定。",prompt:"後續？",correct:{tool:"ongoingMonitor",target:"patient",explain:"持續觀察呼吸、意識、疼痛、體溫與循環，記錄燙傷機轉、冷卻時間與範圍後送醫。"},mistakes:[]}
  ]
});
