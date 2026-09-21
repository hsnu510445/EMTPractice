SCENARIOS.push({
  id:"trauma-fall", category:"trauma", difficulty:3,
  title:"工地墜落傷患",
  summary:"高處墜落合併背痛，練習脊椎保護與快速創傷評估。",
  steps:[
    {type:"action", scene:"工地通報一名工人從約3公尺高處墜落，意識清醒但抱怨背痛。",
      prompt:"抵達現場你第一件事？",
      correct:{tool:"sceneCheck",target:"scene",explain:"工地環境常有持續性危險，現場安全評估優先。"},
      mistakes:[]},
    {type:"emergency", timeLimit:8, randomChance:0.4,
      scene:"你正要靠近傷患時，上方傳來「匡噹」一聲，一塊鷹架上的木板掉落，砸在離你們不遠的地方。",
      question:"你會怎麼做？",
      choices:[
        {text:"立即帶著傷患與自己退到安全距離外，並請現場人員確認上方沒有其他鬆脫的物品，確認安全後才繼續評估", correct:true, explain:"墜落物代表現場還有持續性危險，應優先重新確保安全，避免自己與傷患再次受到二次傷害。"},
        {text:"這只是意外掉落一次，機率不高，繼續留在原地完成評估比較有效率", correct:false, explain:"掉落物代表上方可能還有其他鬆脫的結構或物品，不應該假設不會再發生。"},
        {text:"請傷患自己先起身走到旁邊躲避，你留在原地觀察還有沒有東西掉下來", correct:false, explain:"懷疑脊椎受傷的傷患不應該自行起身走動，這樣可能加重傷害。"},
        {text:"不理會掉落聲，專心先完成手邊正在做的傷病機轉評估再說", correct:false, explain:"現場安全永遠優先於評估的連續性，不應該忽略新出現的危險。"}
      ]},
    {type:"choice", scene:"現場安全，你靠近傷患。從3公尺高處墜落且抱怨背痛。",
      question:"這是重要的什麼資訊？",
      choices:[
        {text:"傷病機轉（MOI）提示可能有脊椎/內臟損傷風險，須提高警覺並考慮脊椎保護", correct:true, explain:"顯著的傷病機轉是判斷是否需要脊椎保護與快速創傷評估的重要依據。"},
        {text:"墜落高度不是重點，只要仔細檢查外觀有沒有明顯傷口就能判斷嚴重度", correct:false, explain:"傷病機轉（MOI）本身就是重要的評估資訊，外觀沒有明顯傷口不代表內部沒有嚴重損傷。"},
        {text:"傷病機轉這類資訊主要是在事後鑑定或釐清事故責任時才會用到，現場評估不用太在意", correct:false, explain:"傷病機轉在現場評估階段就很重要，能幫助判斷是否需要提高警覺、採取脊椎保護等處置。"},
        {text:"墜落屬於比較特殊的意外類型，一般常見的傷病機轉評估主要是針對車禍這類案件", correct:false, explain:"墜落、穿刺、爆炸等都是常見的傷病機轉，不是只有車禍才需要評估MOI。"}
      ]},
    {type:"action", scene:"你準備接觸傷患，由於懷疑脊椎受傷。",
      prompt:"你應該如何開始接觸傷患？",
      correct:{tool:"manualStabilization",target:"neck",explain:"懷疑脊椎損傷時，應盡早以徒手固定頭頸中立在線，並持續維持直到完成適當固定裝置。"},
      mistakes:[]},
    {type:"action", scene:"傷患意識清楚（A），呼吸道通暢，呼吸正常，脈搏規則有力，皮膚正常。",
      prompt:"接下來因MOI明顯需要做？",
      correct:{tool:"rapidTraumaExam",target:"patient",explain:"顯著傷病機轉需要進行頭到腳的快速創傷評估（DCAP-BTLS），以免遺漏其他傷勢。"},
      mistakes:[]},
    {type:"action", scene:"檢查發現背部脊椎處有明顯觸痛與輕微腫脹，四肢感覺與活動正常。",
      prompt:"你決定固定他的頸部，會用？",
      correct:{tool:"cCollar",target:"neck",explain:"脊椎觸痛合併明顯MOI，應以頸圈固定頸部，並持續維持徒手固定直到頸圈完成。"},
      mistakes:[]},
    {type:"action", scene:"頸圈已固定完成，另外兩位同伴也到場協助，準備把他移到長背板上搬運。",
      prompt:"接下來為完整脊椎保護，你還需要？",
      transportSim:true,
      correct:{tool:"spineBoard",target:"patient",explain:"完成頸圈後應以長背板等脊椎固定裝置固定全身，多人協力採木滾翻（log roll）方式移動病患並上板固定，再儘速送醫，途中做基礎生命徵象測量與病史詢問。"},
      mistakes:[]},
    {type:"choice", scene:"途中你詢問病史。",
      question:"SAMPLE病史中的每一項分別代表？（複習用）",
      choices:[
        {text:"S症狀 A過敏史 M用藥史 P病史 L最後進食 E事發經過", correct:true, explain:"這是SAMPLE病史的標準內容。"},
        {text:"S姓名 A地址 M手機 P職業 L住址 E緊急聯絡人", correct:false, explain:"SAMPLE不是個人資料縮寫，而是針對病史內容設計的標準化詢問工具。"},
        {text:"S手術史 A麻醉史 M家族病史 P懷孕史 L住院史 E運動習慣", correct:false, explain:"這不是SAMPLE的正確定義，正確內容應為症狀、過敏史、用藥史、過去病史、最後進食、事發經過。"},
        {text:"SAMPLE是專門設計給創傷病人使用的評估工具，醫療病人應該用其他的病史詢問方式", correct:false, explain:"SAMPLE同樣適用於醫療病人，不是只限創傷病人使用的專屬工具。"}
      ]}
  ]
});
