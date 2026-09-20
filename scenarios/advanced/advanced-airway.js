SCENARIOS.push({
  id:"advanced-airway", category:"advanced", difficulty:3,
  title:"面罩通氣一直漏氣的患者",
  summary:"高級救護練習：從呼吸道評估、有效通氣到辨識進階氣道處置的資格限制。",
  realCase:{title:"高級救護教材主題：呼吸道與通氣",summary:"本題將呼吸道評估、面罩密合、通氣品質與持續監測串成一個需要反覆修正的救護流程。",learningPoint:"先處理可立即改善的呼吸道與通氣問題，再依資格、醫療指導與現場規範考慮進階氣道。",source:"reference/高級救護技術員教科書.pdf"},
  steps:[
    {type:"action",scene:"你在臥室發現一名患者仰躺，呼吸很慢，旁邊有嘔吐物；室內沒有明顯危險。",prompt:"接近患者後先做什麼？",correct:{tool:"sceneCheck",target:"scene",explain:"仍要先確認現場安全與暴露風險，再進入初步評估。"},mistakes:[]},
    {type:"action",scene:"患者無法完整回答問題，胸部起伏微弱，口腔內可見分泌物。",prompt:"你要先確認哪個生命威脅？",correct:{tool:"lookListenFeel",target:"chest",explain:"先確認呼吸品質；微弱、緩慢的呼吸代表通氣不足，不能只看有沒有胸部起伏。"},mistakes:[]},
    {type:"action",scene:"清除可見分泌物後，患者仍無法維持有效呼吸。",prompt:"下一步最重要的處置？",correct:{tool:"bvm",target:"head",explain:"對無法維持有效呼吸的患者提供適當人工通氣，並持續觀察胸部起伏與患者反應。"},mistakes:[]},
    {type:"choice",scene:"BVM通氣時面罩邊緣持續漏氣，胸部起伏不明顯，旁邊有人說可以立刻嘗試高級氣道。",question:"最合理的處置順序？",choices:[
      {text:"先重新調整頭頸位置、面罩密合與通氣技巧，必要時請隊友協助，再重新評估效果",correct:true,explain:"先修正可逆的密合與操作問題，確認每次通氣是否有效，再考慮升級處置。"},
      {text:"【EMT2限定】立即進行進階氣道置入，完全不必再確認面罩通氣品質",correct:false,explain:"進階氣道須符合資格、訓練與醫療指導，且不能跳過基本通氣品質確認。"},
      {text:"因為患者還有胸部起伏，所以停止通氣改為觀察",correct:false,explain:"微弱或不可靠的呼吸不能取代有效通氣，應持續評估並提供需要的支持。"},
      {text:"讓患者喝水清喉嚨，再觀察是否恢復正常呼吸",correct:false,explain:"意識與呼吸不穩定時口服液體有吸入風險，不能用喝水取代呼吸支持。"}
    ]},
    {type:"action",scene:"調整後胸部起伏改善，但患者仍無法自行維持呼吸，等待後送。",prompt:"後續應做什麼？",correct:{tool:"ongoingMonitor",target:"patient",explain:"通氣狀況可能再次惡化，需持續重新評估呼吸道、呼吸、意識與通氣效果。"},mistakes:[]}
  ]
});
