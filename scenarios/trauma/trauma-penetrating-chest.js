SCENARIOS.push({
  id:"trauma-penetrating-chest", category:"trauma", difficulty:3,
  title:"穿刺性胸部創傷",
  summary:"練習胸部穿刺傷的現場安全、呼吸威脅辨識、氧氣支持與快速後送。",
  realCase:{title:"WHO 道路與暴力傷害資料（真實創傷類型）",summary:"穿刺傷可能造成胸腔內重要結構損傷，即使外部傷口很小，也可能在短時間內出現呼吸與循環惡化。",learningPoint:"本題重點是先處理呼吸與循環威脅，避免把小傷口誤判為輕傷；具體胸封與侵入性處置須依受訓範圍及單位流程。",source:"https://www.who.int/news-room/fact-sheets/detail/road-traffic-injuries"},
  steps:[
    {type:"action",scene:"工地發生金屬片穿刺，一名患者胸前有小型開放性傷口，旁邊仍有尖銳金屬。",prompt:"接近前？",correct:{tool:"sceneCheck",target:"scene",explain:"先確認尖銳物與機具已安全，戴好適當防護後再接近。"},mistakes:[]},
    {type:"action",scene:"患者清醒但呼吸急促，傷口周圍有氣泡與血液，說話只能講短句。",prompt:"你先做什麼評估？",correct:{tool:"lookListenFeel",target:"chest",reading:"呼吸34次/分，患側胸廓起伏減少，呼吸明顯費力",explain:"穿刺性胸傷的優先問題是呼吸與循環，不要只測量傷口大小。"},mistakes:[]},
    {type:"choice",scene:"患者越來越喘，皮膚濕冷，意識尚可但回答變慢。",question:"處置方向？",choices:[
      {text:"依受訓範圍維持呼吸道、提供適當氧氣、保護傷口並快速後送",correct:true,explain:"胸部穿刺傷可能快速惡化，需要支持呼吸、避免延誤並讓醫療團隊及早接手。"},
      {text:"把手指伸進傷口確認深度",correct:false,explain:"不要探查傷口，也不要把異物或組織推入傷口。"},
      {text:"讓患者走動以確認呼吸是否真的變差",correct:false,explain:"呼吸窘迫患者不應被要求增加活動。"},
      {text:"因為傷口小，先完成完整病史再處理呼吸",correct:false,explain:"外部傷口大小不能代表胸腔內傷害程度。"}
    ]},
    {type:"action",scene:"氧氣已提供，傷口周圍仍看得到氣泡與血液滲出。",prompt:"你會怎麼處理傷口？",correct:{tool:"coverBurn",target:"chest",explain:"用乾淨敷料覆蓋保護傷口，避免外界持續污染或空氣經傷口大量進出；敷料固定方式須依受訓範圍與單位流程（例如是否使用三邊固定的透氣型敷料），不確定時以能觀察患者呼吸變化為原則。"},mistakes:[]},
    {type:"action",scene:"傷口已覆蓋，患者仍有呼吸窘迫，正在等待快速後送。",prompt:"接下來？",correct:{tool:"ongoingMonitor",target:"patient",explain:"持續監測呼吸、意識、皮膚與脈搏；胸部穿刺傷最需要警覺的惡化徵象是張力性氣胸——呼吸窘迫突然加劇、頸靜脈怒張、氣管偏移、患側呼吸音更弱，一旦出現要立即回報並加速後送。"},mistakes:[]}
  ]
});
