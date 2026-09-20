SCENARIOS.push({
  id:"special-opioid-overdose", category:"special", difficulty:2,
  title:"浴室內叫不醒的年輕人",
  summary:"練習疑似藥物過量患者的現場安全、意識與呼吸評估，以及呼吸支持與持續監測。",
  steps:[
    {type:"action", scene:"你在浴室發現一名25歲男性倒在地上，旁邊有不明藥物包裝。浴室門口還有其他人。",
      prompt:"靠近前？",
      correct:{tool:"sceneCheck",target:"scene",explain:"先確認現場是否仍存在藥物、氣體或其他危險物質，避免施救者暴露。"},mistakes:[]},
    {type:"action", scene:"患者對聲音沒有反應，呼吸非常緩慢。",
      prompt:"你要立即評估什麼？",
      correct:{tool:"lookListenFeel",target:"chest",respRate:6,reading:"呼吸約6次/分，呼吸明顯過慢",explain:"意識改變患者首先要高度注意氣道與呼吸是否受到威脅。"},mistakes:[]},
    {type:"choice", scene:"患者仍無法正常回應，呼吸只有每分鐘約6次。",
      question:"此時最重要的方向？",
      choices:[
        {text:"立即處理呼吸問題並依現場規範提供適當呼吸支持，同時啟動緊急送醫",correct:true,explain:"嚴重呼吸抑制是立即威脅生命的問題，優先處理呼吸。"},
        {text:"先花十分鐘找出藥物名稱，再開始處置",correct:false,explain:"不能為了確認藥物種類而延誤呼吸支持。"},
        {text:"讓患者自己睡醒",correct:false,explain:"呼吸過慢且意識不清不能等待自然恢復。"},
        {text:"先讓患者喝水",correct:false,explain:"意識不清患者有吸入風險，不應口服。"}
      ]},
    {type:"action", scene:"患者呼吸過慢且意識仍不清，且你確認現場無顱底骨折、鼻腔外傷與鼻腔出血。",
      prompt:"你最可能會加上哪種呼吸道輔助？",
      correct:{tool:"nasalAirway",target:"head",explain:"在確認無顱底骨折、鼻腔外傷與鼻腔出血時，鼻咽氣道（NPA）可改善上氣道通暢，並與BVM或氧氣支持合併使用。"},mistakes:[{tool:"oralAirway",target:"head",explain:"若有顱底骨折或鼻腔異常，則應避免鼻咽氣道，改用口咽氣道（OPA）或其他更安全的氣道管理。"}]},
    {type:"action", scene:"患者仍呼吸過慢，需要持續支持。",
      prompt:"接下來？",
      correct:{tool:"ongoingMonitor",target:"patient",explain:"持續監測呼吸、意識與循環，並依現場訓練與單位規範處置及送醫。"},mistakes:[]},
    {type:"action", scene:"準備交班。",
      prompt:"你會交代什麼？",
      correct:{tool:"handoverReport",target:"scene",explain:"交代發現地點、意識狀態、呼吸頻率、現場發現的藥物線索與處置經過。"},mistakes:[]}
  ]
});
