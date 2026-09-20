SCENARIOS.push({
  id:"trauma-chemical-burn", category:"trauma", difficulty:3,
  title:"工業化學品灼傷",
  summary:"練習化學品暴露的現場安全、污染控制、大量沖洗與呼吸道警覺。",
  realCase:{title:"WHO 化學燒傷資料（真實創傷類型）",summary:"WHO將化學物質列為燒傷的重要機轉，化學灼傷常見於工作場所，也可能同時造成眼睛、皮膚與呼吸道傷害。",learningPoint:"本題強調先保護救援者、移除污染來源並用大量清水沖洗；不能用未知化學品互相中和，也不能直接徒手接觸污染物。",source:"https://www.who.int/news-room/fact-sheets/detail/burns"},
  steps:[
    {type:"action",scene:"工廠清潔劑桶破裂，一名員工左前臂與臉部被液體濺到，地面仍有化學品。",prompt:"接近前？",correct:{tool:"sceneCheck",target:"scene",explain:"先確認化學品種類與現場通風，穿戴適當防護並避免救援者被污染；不確定時呼叫專業危害物質支援。"},mistakes:[]},
    {type:"action",scene:"患者意識清楚，臉部刺痛、眼睛流淚，左前臂皮膚發白疼痛，衣袖仍濕。",prompt:"你優先處理什麼？",correct:{tool:"coolBurn",target:"leftArm",explain:"依受訓範圍安全移除污染衣物並以大量清水沖洗，化學灼傷需要持續沖洗與快速送醫評估。"},mistakes:[]},
    {type:"choice",scene:"隊友想用另一種清潔劑中和原本的化學品，患者也想用手擦掉臉上的液體。",question:"哪個做法正確？",choices:[
      {text:"避免互相中和與徒手擦拭，持續大量清水沖洗並防止污染擴散",correct:true,explain:"未知化學反應可能產生熱或有害氣體，擦拭也可能把污染帶到更多皮膚。"},
      {text:"用另一種酸鹼液體中和，越快越好",correct:false,explain:"現場不應自行嘗試化學中和，可能造成放熱或二次傷害。"},
      {text:"先用乾布用力擦掉，再停止沖洗",correct:false,explain:"擦拭可能擴大污染，化學灼傷通常需要持續大量沖洗。"},
      {text:"因為皮膚沒有起泡，所以不需要送醫",correct:false,explain:"化學傷害可能持續進行，外觀不一定能反映深度。"}
    ]},
    {type:"action",scene:"患者已持續沖洗，仍有眼睛疼痛與咳嗽，等待後送。",prompt:"接下來？",correct:{tool:"ongoingMonitor",target:"patient",explain:"持續監測呼吸、意識、眼睛症狀與皮膚變化，將化學品名稱、暴露時間、沖洗時間與安全資料交給接手團隊。"},mistakes:[]}
  ]
});
