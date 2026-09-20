SCENARIOS.push({
  id:"trauma-blunt-chest", category:"trauma", difficulty:3,
  title:"車禍後的鈍性胸部創傷",
  summary:"練習辨識呼吸窘迫、胸部外傷與低血氧，先處理立即威脅生命的問題。",
  realCase:{title:"2018 年台灣普悠瑪列車出軌事故",summary:"列車出軌造成大量傷亡與多種高能量創傷，包含胸部撞擊、骨折與受困脫困後的複合性傷勢。",learningPoint:"本題練習胸部撞擊後的呼吸評估、低血氧辨識與快速後送；真實大量傷患現場還需要先做區域安全與分流。",source:"https://en.wikipedia.org/wiki/2018_Yilan_train_derailment"},
  steps:[
    {type:"action", scene:"轎車正面撞上護欄，駕駛胸口撞到方向盤。現場仍有破碎玻璃與漏油。", prompt:"接近患者前？",
      correct:{tool:"sceneCheck",target:"scene",explain:"先確認交通、玻璃與漏油等危險，確保救援者與患者都不再暴露於立即危險。"},mistakes:[]},
    {type:"action", scene:"患者清醒但呼吸急促，右側胸口疼痛，說話只能講短句。", prompt:"你先評估什麼？",
      correct:{tool:"lookListenFeel",target:"chest",reading:"呼吸32次/分，右側胸廓起伏較小，說話只能講短句",explain:"胸部外傷合併呼吸窘迫時，先快速評估呼吸速率、品質、胸廓起伏與說話能力。"},mistakes:[]},
    {type:"choice", scene:"患者越來越喘，右側胸廓起伏仍明顯不對稱。", question:"目前最重要的方向？",
      choices:[
        {text:"優先支持呼吸、給予適當氧氣並快速後送，途中持續重新評估",correct:true,explain:"胸部創傷可能快速惡化，呼吸窘迫與不對稱胸廓需要優先處理與快速醫療評估。"},
        {text:"先花很多時間完成完整病史，再處理呼吸問題",correct:false,explain:"完整病史重要，但不能延誤目前的呼吸威脅。"},
        {text:"要求患者平躺並自行走到救護車",correct:false,explain:"應依呼吸狀況協助舒適姿勢，避免不必要活動與延誤。"},
        {text:"只處理胸壁瘀青，因為沒有看到大量外出血",correct:false,explain:"胸部重大傷害可能沒有大量外出血，不能用外觀出血量排除內部問題。"}
      ]},
    {type:"action", scene:"患者SpO₂偏低且仍呼吸困難，坐著比較舒服。", prompt:"你會提供什麼支持？",
      correct:{tool:"oxygenMask",target:"head",oxygenSpec:{device:"nonRebreather",flowMin:10,flowMax:15},explain:"依患者低血氧與呼吸窘迫程度提供氧氣支持，並持續觀察意識與呼吸是否惡化。"},mistakes:[]},
    {type:"action", scene:"完成初步處置後，患者仍有胸痛與呼吸不對稱，等待快速後送。", prompt:"途中應如何做？",
      correct:{tool:"ongoingMonitor",target:"patient",explain:"持續監測呼吸、意識、皮膚與生命徵象趨勢，將胸部外傷機轉與變化清楚交班。"},mistakes:[]}
  ]
});