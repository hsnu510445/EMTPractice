SCENARIOS.push({
  id:"special-excited-delirium", category:"special", difficulty:2,
  title:"情緒失控、體溫過高的年輕男子",
  summary:"疑似藥物使用後暴躁攻擊、體溫異常升高的患者，練習優先考量現場安全與辨識致命過熱風險。",
  steps:[
    {type:"choice", scene:"民眾報案一名年輕男子在路口脫掉上衣、對著空氣揮拳吼叫，力氣看起來異常大，講話語無倫次，警方正在現場戒護中。",
      question:"你到場後的優先考量是什麼？",
      choices:[
        {text:"在確保自身安全與有足夠戒護人力前，不貿然單獨近身接觸，同時留意這類患者可能合併嚴重過熱與心臟驟停的高風險", correct:true, explain:"這類極度躁動的患者攻擊性與力氣都可能異常增強，且常合併嚴重過熱代謝狀態，貿然近身有受傷風險，也可能錯過即將發生的心臟驟停警訊。"},
        {text:"立即上前試著跟他講道理，用溫和的語氣安撫他的情緒讓他冷靜下來", correct:false, explain:"這類患者當下可能無法理性溝通，貿然單獨近身有受傷的風險。"},
        {text:"趁他不注意，幾個人一起壓制他的四肢讓他躺下來控制住", correct:false, explain:"強力壓制合併患者本身的過熱與心臟負荷，可能增加猝死的風險，需要有經驗的團隊謹慎評估後執行，而非貿然壓制。"},
        {text:"先在旁邊等他力氣耗盡、自然安靜下來再處理", correct:false, explain:"這類患者力竭前反而是心臟驟停風險最高的階段，不應該只是被動等待。"}
      ]},
    {type:"action", scene:"警方協助戒護、局面稍微穩定後，你能夠靠近評估他。",
      prompt:"你會先做什麼？",
      correct:{tool:"generalImpression",target:"patient",
        giRelevant:["patient:distress","patient:skinColor"],
        giFindings:{
          "patient:distress":"持續躁動不安、對答語無倫次",
          "patient:skinColor":"皮膚異常潮紅，摸起來很燙"
        },
        explain:"在安全前提下觀察他的整體狀態，皮膚異常燙合併極度躁動，提示可能有嚴重過熱的狀況。"},
      mistakes:[]},
    {type:"action", scene:"你想確認他的體溫。",
      prompt:"你會做什麼？",
      correct:{tool:"thermometer",target:"patient",
        reading:"耳溫40.2°C",
        explain:"這類患者常合併嚴重的核心體溫升高，需要積極降溫並持續監測，避免演變成致命的高體溫相關併發症。"},
      mistakes:[]},
    {type:"action", scene:"確認過熱後。",
      prompt:"你會做什麼？",
      correct:{tool:"coolActive",target:"patient",
        explain:"積極降溫有助於降低核心體溫，是處理這類嚴重過熱狀態的重要一步。"},
      mistakes:[]},
    {type:"action", scene:"降溫處置後，他的情緒仍然不穩定。",
      prompt:"接下來你會做什麼？",
      correct:{tool:"ongoingMonitor",target:"patient",
        explain:"持續密切監測意識、體溫與心跳，這類患者有突然出現心臟驟停的風險，需要隨時準備進入急救流程。"},
      mistakes:[]},
    {type:"action", scene:"準備送醫。",
      prompt:"交班時你會特別說明什麼？",
      correct:{tool:"handoverReport",target:"scene",
        explain:"交班時要說明現場躁動情形、疑似物質使用史、體溫數值與降溫處置經過，這些資訊對醫院後續處置非常重要。"},
      mistakes:[]}
  ]
});
