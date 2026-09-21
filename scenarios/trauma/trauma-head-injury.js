SCENARIOS.push({
  id:"trauma-head-injury", category:"trauma", difficulty:2,
  title:"騎腳踏車摔倒的頭部外傷",
  summary:"練習頭部外傷患者的初步評估、頸椎保護、意識變化與持續監測。",
  steps:[
    {type:"action", scene:"一名30歲男性騎腳踏車摔倒，頭部撞到地面，現在坐在路旁，表示頭痛。",
      prompt:"接近患者前？",
      correct:{tool:"sceneCheck",target:"scene",explain:"先確認道路、車流與周圍環境安全，再接近患者。"},mistakes:[]},
    {type:"action", scene:"患者清醒，但說不確定自己剛才有沒有短暫失去意識，頸部也覺得痛。",
      prompt:"你會先做什麼保護？",
      correct:{tool:"manualStabilization",target:"neck",explain:"有頭部外傷且伴隨頸部疼痛時，應注意脊椎損傷可能並維持手動穩定。"},mistakes:[]},
    {type:"action", scene:"患者仍能回答問題，但開始說自己有點噁心。",
      prompt:"你會評估什麼？",
      correct:{tool:"gcsCheck",target:"patient",gcsSpec:{e:4,v:4,m:6},reading:"GCS 14（E4 V4 M6），患者回答稍混亂",explain:"頭部外傷後應評估意識程度並注意是否出現變化。"},mistakes:[]},
    {type:"action", scene:"你發現他鼻腔有明顯滲血，且耳後與雙眼眼眶周圍都有瘀青，思考是否可能有顱底骨折。",
      prompt:"如果此時他意識變差、呼吸道變得不通暢，你最適合放哪種呼吸道輔助？",
      correct:{tool:"oralAirway",target:"head",explain:"懷疑顱底骨折時絕對不能放置鼻咽氣道（NPA），因為鼻腔插入可能加重顱腦損傷；此時應改用口咽氣道（OPA）維持上氣道通暢。"},
      mistakes:[{tool:"nasalAirway",target:"head",explain:"顱底骨折時禁用鼻咽氣道（NPA）；鼻腔插入可能造成更嚴重的顱內損傷與腦膜破裂風險。", nasalAirwayForbidden:true}]},
    {type:"choice", scene:"患者的回答開始變慢，家屬表示他剛才還能完整描述事故，現在卻有點混亂。",
      question:"你應如何處理？",
      choices:[
        {text:"把意識變化視為重要警訊，持續維持保護、重新評估並儘速送醫",correct:true,explain:"頭部外傷後意識改變可能代表狀況惡化，需要密切監測與醫療評估。"},
        {text:"因為患者沒有大量外出血，所以讓他自己走到車上",correct:false,explain:"沒有外出血不能排除嚴重頭部或頸椎傷害。"},
        {text:"先讓患者睡一下，醒來再看看",correct:false,explain:"意識正在變化時不能用睡覺取代持續評估。"},
        {text:"請患者自己轉頭確認頸部還能不能動",correct:false,explain:"懷疑脊椎損傷時不應要求患者自行活動頸部測試。"}
      ]},
    {type:"action", scene:"準備固定與搬運。",
      prompt:"你會考慮使用？",
      correct:{tool:"cCollar",target:"neck",explain:"依訓練與單位規範，懷疑頸椎損傷時可考慮頸椎保護措施，並維持整體脊椎穩定。"},mistakes:[]},
    {type:"action", scene:"送醫途中。",
      prompt:"你會持續？",
      correct:{tool:"ongoingMonitor",target:"patient",explain:"頭部外傷患者可能出現延遲性惡化，需持續監測意識、呼吸與生命徵象。"},mistakes:[]}
  ]
});
