SCENARIOS.push({
  id:"special-hypothermia", category:"special", difficulty:3,
  title:"濕冷步道上不再發抖的登山客",
  summary:"山區失溫的登山客，有一個現象比體溫數字更需要你注意。",
  steps:[
    {type:"action", scene:"你在濕冷的山區步道發現一名迷路的登山客倒在地上，全身濕透，風很大。",
      prompt:"第一步？",
      correct:{tool:"sceneCheck",target:"scene",explain:"惡劣天氣與環境本身就是持續性危險，需評估是否要先讓傷患脫離風寒環境，並規劃安全的撤離方式。"},
      mistakes:[]},
    {type:"action", scene:"你靠近他，拍肩呼喚。",
      prompt:"你應該？",
      correct:{tool:"verbalCheck",target:"patient",explain:"他勉強有回應，但講話語無倫次，意識程度屬於V級，這在失溫病人身上是重要警訊。"},
      mistakes:[]},
    {type:"choice", scene:"你注意到他意識混亂，而且已經沒有在發抖了。",
      question:"「停止發抖」在失溫的病人身上代表什麼？",
      choices:[
        {text:"這是失溫惡化的警訊——當核心體溫降到一定程度，身體會失去發抖產熱的能力，通常代表中重度失溫，需要格外小心處理", correct:true, explain:"發抖本身是身體產熱的機制，當核心體溫降得更低，這個機制會失效，「停止發抖」反而代表狀況更嚴重，而不是好轉。"},
        {text:"發抖會消耗體力，停止發抖代表身體已經逐漸回溫、狀況正在好轉", correct:false, explain:"停止發抖通常代表失溫持續惡化而不是好轉，這是身體產熱機制失效的警訊。"},
        {text:"發抖只是身體對低溫環境的自然反應，停止與否跟失溫嚴重度沒有太大關聯", correct:false, explain:"發抖是否停止其實是判斷失溫嚴重度的重要臨床線索，不應該視為沒有特別意義。"},
        {text:"在濕冷環境待了一段時間，意識混亂加上不再發抖，比較像是單純累了想睡覺", correct:false, explain:"合併意識混亂與停止發抖，應優先考慮中重度失溫惡化，而不是單純的睏倦想睡。"}
      ]},
    {type:"action", scene:"你決定確認他的循環狀況。",
      prompt:"你會怎麼做？",
      correct:{tool:"pulseCheck",target:"neck",
        reading:"頸動脈約42次/分，微弱且需觸診30秒以上才確定",
        explain:"失溫病人心跳可能非常緩慢微弱，判斷是否有脈搏可能需要比平常更長的時間，避免因觸診時間太短就誤判為無脈搏而貿然開始CPR或過度搬動。"},
      mistakes:[]},
    {type:"action", scene:"確認有微弱脈搏與呼吸。",
      prompt:"你會怎麼處理他的體溫？",
      correct:{tool:"blanket",target:"patient",explain:"以乾燥物品被動保暖為主，避免用力搓揉肢體或過度活動，粗暴的搬動可能誘發嚴重心律不整。"},
      mistakes:[]},
    {type:"action", scene:"你準備搬運他下山送醫。",
      prompt:"搬運與送醫途中你要特別注意？",
      correct:{tool:"positionPatient",target:"patient",positionSpec:{position:"supineNeutral"},explain:"應盡量以水平姿勢搬運並減少震動與粗暴動作，中重度失溫的心臟對刺激特別敏感，不當搬動可能誘發致命性心律不整。"},
      mistakes:[]}
  ]
});
