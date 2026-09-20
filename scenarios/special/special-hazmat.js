SCENARIOS.push({
  id:"special-hazmat", category:"special", difficulty:2,
  title:"工廠裡的化學品洩漏",
  summary:"多名員工從廠房跑出來，咳嗽流淚，廠房裡還瀰漫著氣體，你的第一反應會是什麼？",
  steps:[
    {type:"choice", scene:"工廠通報化學品洩漏，多名員工從廠房跑出來，眼睛紅、劇烈咳嗽，廠房內還瀰漫著不明氣體。",
      question:"身為第一線到達的救護人員，你會怎麼做？",
      choices:[
        {text:"在安全距離外待命，不貿然進入污染區，通報需要具備適當防護裝備與去污能力的人員協助，優先照顧已經跑出來、在安全區的傷患", correct:true, explain:"未確認化學物質種類與危害程度、且沒有適當防護裝備時，貿然進入洩漏區可能使自己也成為傷患。這類案件通常要區分污染區/緩衝區/安全區，並等待具備適當裝備的人員處理污染區。"},
        {text:"立即戴上一般外科口罩衝進廠房，趁氣體還沒擴散前盡快把裡面的人一個個搶救出來", correct:false, explain:"一般外科口罩無法提供化學氣體防護，沒有適當裝備貿然進入污染區，可能讓自己也變成傷患，反而增加現場需要救援的人數。"},
        {text:"請已經自行逃出、還能行動的人員再回去廠房裡把還沒出來的同事一個個帶出來", correct:false, explain:"不應要求沒有防護裝備、未受訓練的人員回到污染區帶人，這樣可能讓更多人暴露於危害中。"},
        {text:"留在原地詳細詢問洩漏的化學品名稱與濃度，等資訊完全確認後再決定下一步要怎麼做", correct:false, explain:"確認物質資訊固然重要，但應該同時後退到安全距離、優先照顧安全區的傷患，而不是留在原地不動等資訊。"}
      ]},
    {type:"action", scene:"你在安全距離外設立初步的傷患集結區。",
      prompt:"接下來？",
      correct:{tool:"sceneCheck",target:"scene",explain:"持續評估風向、氣體擴散範圍與人員狀況，確保安全區真的安全，並持續與後續到達的資源保持聯繫。"},
      mistakes:[]},
    {type:"action", scene:"一名咳嗽劇烈、眼睛紅腫流淚的員工被帶到安全區。",
      prompt:"你可以開始評估他，第一步？",
      correct:{tool:"generalImpression",target:"patient",
        giRelevant:["patient:distress","patient:sceneClue"],
        giFindings:{
          "patient:distress":"劇烈咳嗽，眼睛紅腫流淚，呼吸看起來有點喘",
          "patient:sceneClue":"從瀰漫不明氣體的廠房跑出來，身上可能還有殘留物質"
        },
        explain:"建立整體印象，觀察呼吸窘迫程度與意識狀態。"},
      mistakes:[]},
    {type:"action", scene:"你靠近他評估呼吸。",
      prompt:"你會做什麼檢查？",
      correct:{tool:"lookListenFeel",target:"chest",respRate:26,
        reading:"26次/分，可聽到喘鳴聲",
        explain:"刺激性氣體吸入可能造成呼吸道發炎與支氣管收縮，需要密切評估呼吸狀況。"},
      mistakes:[]},
    {type:"action", scene:"呼吸評估後。",
      prompt:"你會給予？",
      correct:{tool:"oxygenMask",target:"head",
        oxygenSpec:{device:"simpleMask", flowMin:6, flowMax:10},
        explain:"給予氧氣支持呼吸，並儘速送醫評估吸入性傷害的程度。"},
      mistakes:[]},
    {type:"choice", scene:"你準備送醫。",
      question:"在送醫前，為什麼要考慮先移除或隔離傷患身上可能沾染化學品的衣物？",
      choices:[
        {text:"避免殘留化學物質持續刺激/傷害皮膚與呼吸道，也避免污染救護車與其他人員（包含你自己）", correct:true, explain:"衣物上殘留的化學物質可能持續造成傷害，也可能造成二次污染，這是去污（decontamination）的基本概念。"},
        {text:"只是為了保持救護車乾淨", correct:false, explain:"更重要的是避免持續傷害與二次污染，不只是清潔問題。"},
        {text:"沒有必要，直接送醫最快", correct:false, explain:"未去污可能讓傷害持續，也可能污染救護車與其他人員。"},
        {text:"這是消防的工作跟救護無關", correct:false, explain:"救護人員在傷患送醫前也需要留意去污與交叉污染的風險。"}
      ]}
  ]
});
