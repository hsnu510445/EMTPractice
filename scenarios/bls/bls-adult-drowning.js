SCENARIOS.push({
  id:"bls-adult-drowning", category:"bls", difficulty:2,
  title:"游泳池溺水的無反應成人",
  summary:"練習溺水後無反應患者的安全確認、呼吸評估與CPR/AED處置流程。",
  steps:[
    {type:"action", scene:"游泳池旁，一名40歲男性剛被救上岸，沒有回應呼叫，旁人表示他在水中停留一段時間。",
      prompt:"接近患者前？",
      correct:{tool:"sceneCheck",target:"scene",explain:"先確認救援環境安全，確保施救者不會成為下一名溺水者。"},mistakes:[]},
    {type:"action", scene:"患者躺在池畔，對聲音沒有反應。",
      prompt:"你會先確認什麼？",
      correct:{tool:"verbalCheck",target:"patient",explain:"確認患者是否有反應並立即進入後續初步評估。"},mistakes:[]},
    {type:"action", scene:"患者沒有正常反應，胸廓沒有正常呼吸起伏。",
      prompt:"此時？",
      correct:{tool:"cpr",target:"chest",explain:"無反應且沒有正常呼吸時應立即開始CPR，並盡快取得AED。"},mistakes:[]},
    {type:"action", scene:"旁人已拿來AED。",
      prompt:"你會做什麼？",
      correct:{tool:"cpr",target:"chest",explain:"持續依CPR流程進行，並配合AED分析與後續指示，盡量減少中斷按壓的時間。"},mistakes:[]},
    {type:"action", scene:"AED完成分析後。",
      prompt:"接下來？",
      correct:{tool:"ongoingMonitor",target:"patient",explain:"依AED與CPR流程持續處置，並持續觀察患者是否恢復正常呼吸與循環。"},mistakes:[]}
  ]
});
