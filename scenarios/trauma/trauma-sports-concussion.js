SCENARIOS.push({
  id:"trauma-sports-concussion", category:"trauma", difficulty:2,
  title:"足球場邊的頭部碰撞",
  summary:"兩名球員爭頂頭部相撞，其中一人堅持要繼續比賽，練習腦震盪的辨識與處置原則。",
  steps:[
    {type:"action", scene:"足球比賽中兩名球員爭頂頭部互撞，一人倒地片刻後自行坐起，裁判暫停比賽讓你進場評估。",
      prompt:"進場前你第一件事？",
      correct:{tool:"sceneCheck",target:"scene",explain:"確認比賽已暫停、周遭沒有持續的碰撞風險，再安全進場評估。"},
      mistakes:[]},
    {type:"action", scene:"你靠近他，他坐在地上扶著頭，看起來有點恍惚。",
      prompt:"你會先？",
      correct:{tool:"generalImpression",target:"patient",
        giRelevant:["patient:posture","patient:distress"],
        giFindings:{
          "patient:posture":"坐在地上扶著頭，看起來有點恍惚",
          "patient:distress":"表情有點茫然，反應比平常慢"
        },
        explain:"觀察他的整體狀態：是否恍惚、扶頭、表情痛苦等，形成整體印象。"},
      mistakes:[]},
    {type:"action", scene:"他呼喚前就已經自己睜著眼睛，你問他叫什麼名字，他答得出來但明顯很慢、還講了一句跟現在情況無關的話，你請他握你的手、動一動四肢，他都能照做。",
      prompt:"根據他睜眼、說話、肢體動作的表現，你會用什麼工具評估？",
      correct:{tool:"gcsCheck",target:"patient",gcsSpec:{e:4,v:4,m:6},explain:"睜眼反應4分（自發性睜眼）、語言反應4分（對答混亂）、運動反應6分（遵從指令），總分14分，屬於輕度異常，但仍需要專業評估與密切觀察是否惡化。"},
      mistakes:[]},
    {type:"action", scene:"他能對答但反應遲緩，你想進一步檢查。",
      prompt:"你會做什麼檢查？",
      correct:{tool:"penlight",target:"head",
        reading:"雙側瞳孔等圓，對光皆有反應；但他回答問題明顯遲緩，且說不清楚剛才發生什麼事",
        explain:"瞳孔檢查是神經學評估的一部分，搭配意識與對答狀況綜合判斷。"},
      mistakes:[]},
    {type:"choice", scene:"他表示頭痛、有點想吐，完全想不起剛才被撞的那一刻發生了什麼事。",
      question:"頭痛、噁心、對受傷當下失去記憶（創傷失憶），這樣的表現最符合？",
      choices:[
        {text:"疑似腦震盪，屬於輕度創傷性腦損傷，需要專業醫療評估，不能只當作「撞暈了一下」處理", correct:true, explain:"頭痛、噁心、意識混亂、創傷失憶都是腦震盪的典型表現，即使當下看起來會自行恢復，仍須專業評估並密切觀察是否有更嚴重腦傷的警訊。"},
        {text:"激烈運動後偶爾會頭暈想吐，這應該是體力消耗造成的正常反應，休息一下就會緩解", correct:false, explain:"這些症狀合併明確的頭部撞擊機轉與創傷失憶，不應該只當作體力消耗的正常反應處理。"},
        {text:"比賽中頭部碰撞很常見，選手當下感覺沒事、能自己坐起來，就代表沒有實質受傷", correct:false, explain:"創傷失憶與反應變慢是異常且需要重視的表現，不能因為他能自己坐起來就排除受傷的可能。"},
        {text:"腦震盪必須合併明顯的意識喪失或昏迷才能算數，他全程都醒著，所以不算腦震盪", correct:false, explain:"腦震盪不一定會有明顯的意識喪失，目前頭痛、噁心、創傷失憶的表現已經足以懷疑。"}
      ]},
    {type:"choice", scene:"他堅持自己「只是撞到而已，沒事」，想立刻起身回場上繼續比賽。",
      question:"你會怎麼回應？",
      choices:[
        {text:"不應讓他立即恢復比賽，任何疑似腦震盪的球員都應停止比賽並由醫療人員完整評估，即使當下症狀看起來會緩解", correct:true, explain:"這是運動醫學中「有疑慮就先讓他休息」（When in doubt, sit them out）的核心原則，腦震盪後過早恢復劇烈活動有較高風險發生更嚴重的二次腦傷。"},
        {text:"他自己感覺得到身體狀況，可以尊重他的意願，讓他自己決定要不要回場上比賽", correct:false, explain:"疑似腦震盪病人的判斷力可能已經受到影響，不應該讓他自行決定是否恢復比賽。"},
        {text:"先觀察接下來幾分鐘有沒有嘔吐的狀況，只要沒有嘔吐就可以放心讓他回場上", correct:false, explain:"是否嘔吐並不是唯一的判斷標準，目前已經有頭痛、噁心、創傷失憶等多項腦震盪警訊。"},
        {text:"讓他在場邊慢跑幾步、做些簡單動作，如果看起來沒有明顯異常就能重新上場", correct:false, explain:"不應該用簡單的跑步測試作為恢復劇烈運動的判斷依據，這無法真正排除腦震盪的風險。"}
      ]},
    {type:"action", scene:"你說服他先在場邊休息，等待進一步評估與送醫。",
      prompt:"等待期間你應該？",
      correct:{tool:"ongoingMonitor",target:"patient",explain:"持續觀察是否出現惡化警訊：頭痛加劇、反覆嘔吐、單側瞳孔異常、意識程度持續下降、肢體無力或抽搐等，這些都代表可能有更嚴重的顱內損傷，需要立即升高送醫優先度。"},
      mistakes:[]}
  ]
});
