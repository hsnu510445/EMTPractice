SCENARIOS.push({
  id:"trauma-pedestrian-struck", category:"trauma", difficulty:3,
  title:"行人遭車輛撞擊",
  summary:"練習高能量交通事故的現場安全、快速創傷評估、頭部傷害與休克警覺。",
  realCase:{title:"WHO 道路交通傷害資料（真實公共衛生案例）",summary:"WHO指出道路交通事故每年造成大量死亡與非致命傷害，行人、自行車與機車使用者是重要的脆弱道路使用者。",learningPoint:"本題以行人被撞練習二次事故安全、傷病機轉、頭部與胸腹部內傷警覺，以及不要被單一外傷分散注意力。",source:"https://www.who.int/news-room/fact-sheets/detail/road-traffic-injuries"},
  steps:[
    {type:"action",scene:"夜間十字路口，一名行人被轎車撞倒，車流尚未完全停止，路面有碎片。",prompt:"接近患者前？",correct:{tool:"sceneCheck",target:"scene",explain:"先控制車流、確認車輛與碎片等危險，避免救援者成為第二名傷者。"},mistakes:[]},
    {type:"action",scene:"患者清醒但反應變慢，頭部有擦傷，左胸疼痛，左大腿外觀變形。",prompt:"你先建立什麼？",correct:{tool:"generalImpression",target:"patient",explain:"先建立整體印象並快速找出立即威脅生命的問題，不要只處理最明顯的腿部變形。"},mistakes:[]},
    {type:"action",scene:"患者回答不完整，呼吸急促，左胸起伏較小。",prompt:"接下來評估？",correct:{tool:"lookListenFeel",target:"chest",reading:"呼吸30次/分，左胸起伏減少，說話中途需要停下喘氣",explain:"高能量撞擊後要快速評估呼吸與胸廓對稱性，胸部內傷可能比外表傷口更危險。"},mistakes:[]},
    {type:"choice",scene:"患者沒有大量外出血，但臉色蒼白、脈搏很快且逐漸嗜睡。",question:"正確判斷？",choices:[
      {text:"警覺休克或嚴重內傷，維持初步評估、保暖、快速後送並持續監測",correct:true,explain:"交通事故後的休克不一定伴隨大量外出血，意識與循環趨勢是重要警訊。"},
      {text:"沒有大量外出血，所以先讓患者坐起來休息",correct:false,explain:"不能用外出血量排除內出血或休克，也不應增加不必要活動。"},
      {text:"先拍照記錄所有傷口，再開始評估",correct:false,explain:"紀錄不能延誤立即威脅生命的評估與處置。"},
      {text:"只固定大腿，胸部與意識可以到醫院再處理",correct:false,explain:"呼吸與意識變化優先於局部骨折固定。"}
    ]},
    {type:"action",scene:"患者需要等待快速後送，意識仍在變化。",prompt:"等待與運送途中？",correct:{tool:"ongoingMonitor",target:"patient",explain:"持續追蹤意識、呼吸、循環與四肢遠端狀態，將撞擊方向、患者變化與處置時間交班。"},mistakes:[]}
  ]
});
