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
    {type:"action", scene:"患者沒有正常反應，胸廓沒有正常呼吸起伏，旁人正在通報並找AED過來。",
      prompt:"你會怎麼做？",
      cprSim:true,
      correct:{tool:"cpr",target:"chest",explain:"溺水造成的心跳停止主要是缺氧引起，與一般心因性停止不同，指引建議可先給予幾口人工呼吸再開始按壓；AED到場後依指示分析、必要時電擊，電擊或分析後應立即恢復按壓，不要因為觀察而中斷太久。"},
      mistakes:[]}
  ]
});
