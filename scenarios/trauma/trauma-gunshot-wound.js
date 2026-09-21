SCENARIOS.push({
  id:"trauma-gunshot-wound", category:"trauma", difficulty:3,
  title:"槍傷患者：時間就是生命",
  summary:"路口傳出槍響，一人中彈倒地，練習穿刺性槍傷的現場安全、快速評估與「儘速送醫優先於現場處置」的判斷，現場拖延可能決定生死。",
  steps:[
    {type:"choice", scene:"你們接獲通報附近路口傳出槍響、有人倒地，警方正在趕往現場的路上，你們比警方早一步抵達。",
      question:"你會怎麼做？",
      choices:[
        {text:"在警方抵達、確認現場安全、排除持續的槍擊風險前，不貿然進入現場，於安全距離外待命", correct:true, explain:"開槍者可能還在現場或附近，救護人員不具備因應持續槍擊威脅的裝備與訓練，貿然進入可能讓自己也中彈受傷。"},
        {text:"立即衝進現場搶救，時間緊迫，不應該花時間等待警方戒護", correct:false, explain:"在確認安全前貿然進入有現役槍擊風險的現場，可能讓救護人員自己也成為傷患，這樣反而幫不了任何人。"},
        {text:"先躲在掩蔽物後方觀察，如果一分鐘內沒有再聽到槍聲，就自行判斷可以進入", correct:false, explain:"沒有聽到槍聲不代表危險已經解除，現場安全的確認應該交由警方專業判斷，而不是自行猜測。"},
        {text:"請現場民眾帶路，一邊靠近一邊評估路上是否安全", correct:false, explain:"不應該讓未受訓練的民眾帶頭進入可能還有危險的現場，也不應該邊移動邊評估安全，應該先在安全距離外待命。"}
      ]},
    {type:"action", scene:"警方確認現場安全後，你們上前評估傷患，他腹部有一處看起來不大的傷口。",
      prompt:"你會先做什麼？",
      correct:{tool:"generalImpression",target:"patient",
        giRelevant:["abdomen:abdBruise","patient:distress"],
        giFindings:{
          "abdomen:abdBruise":"腹部有一處看起來不大的圓形傷口，周圍有少量滲血",
          "patient:distress":"呼吸急促、皮膚看起來蒼白，表情焦慮"
        },
        explain:"建立整體印象，觀察傷口外觀與病人整體反應，槍傷的體表傷口大小不一定能反映內部傷害程度。"},
      mistakes:[]},
    {type:"choice", scene:"傷口看起來不大，但他呼吸急促、皮膚蒼白。",
      question:"體表傷口看起來不大，這代表傷勢不嚴重嗎？",
      choices:[
        {text:"槍傷的體表傷口大小不能代表內部傷害程度，子彈可能造成深層器官與血管的嚴重損傷，即使外觀傷口很小，仍要當作高風險創傷處理，儘速送醫", correct:true, explain:"子彈進入體內後的路徑與能量釋放難以從體表傷口判斷，即使入口很小，內部器官與血管的損傷可能非常嚴重。"},
        {text:"傷口很小通常代表子彈沒有進入太深，可以先當作一般外傷處理，不用太緊張", correct:false, explain:"傷口大小不能反映子彈的實際路徑與內部傷害，不應該用外觀傷口小就放鬆警覺。"},
        {text:"主要看有沒有明顯的大量出血，只要沒有大出血，體表小傷口就不用太緊張", correct:false, explain:"皮膚蒼白與呼吸急促已經是循環受到影響的警訊，不能只看外觀出血量來判斷嚴重度。"},
        {text:"傷口大小基本上可以直接反映子彈對身體內部造成的傷害程度", correct:false, explain:"這個說法不正確，體表傷口大小跟內部實際傷害程度並沒有直接對應關係。"}
      ]},
    {type:"action", scene:"你決定處理傷口。",
      prompt:"你會怎麼做？",
      correct:{tool:"coverBurn",target:"abdomen",
        explain:"用乾淨敷料覆蓋保護傷口，不探查傷口深度，避免延誤送醫時間。"},
      mistakes:[]},
    {type:"action", scene:"傷口處理後。",
      prompt:"你會給予？",
      correct:{tool:"oxygenMask",target:"head",
        oxygenSpec:{device:"nonRebreather", flowMin:10, flowMax:15},
        explain:"皮膚蒼白、呼吸急促提示可能有內出血休克的早期表現，給予高濃度氧氣支持。"},
      mistakes:[]},
    {type:"choice", scene:"同伴問你，要不要在現場先花時間仔細做完整的身體檢查、確認所有可能的傷口與細節後再出發。",
      question:"你會怎麼決定？",
      choices:[
        {text:"穿刺性槍傷這類高風險創傷應把握現場時間，只做最必要的處置（呼吸道、傷口覆蓋、氧氣支持），儘快送醫讓外科團隊接手，不應在現場花過多時間做詳細檢查", correct:true, explain:"這類創傷病人真正需要的處置（手術止血）只有醫院能提供，現場停留時間拉長，等於延後病人接受決定性治療的時間。"},
        {text:"應該把握在現場的時間，盡可能完整詳細地檢查每一個可能的傷口後再出發比較保險", correct:false, explain:"高風險穿刺傷不應該在現場花過多時間做詳細檢查，這樣反而會延誤送醫的時機。"},
        {text:"現場處置時間長短對這類病人的預後沒有太大差別，重點只在有沒有做完該做的處置", correct:false, explain:"對這類高風險創傷病人而言，儘速送醫本身就是重要的處置原則之一，現場時間拖長會直接影響預後。"},
        {text:"先在現場等待家屬到場確認後續處置方式的意願後再決定是否出發", correct:false, explain:"病人情況危急，不應該在現場等待非必要的確認程序而延誤送醫。"}
      ]},
    {type:"action", scene:"準備出發送醫。",
      prompt:"交班時你會特別說明什麼？",
      correct:{tool:"handoverReport",target:"scene",
        explain:"交班時要說明受傷機轉（槍傷）、傷口位置與數量、生命徵象變化趨勢與現場處置經過，讓外科團隊能儘快準備接手。"},
      mistakes:[]}
  ]
});
