SCENARIOS.push({
  id:"trauma-dog-bite", category:"trauma", difficulty:1,
  title:"遭流浪犬咬傷的路人",
  summary:"晨跑時遭流浪犬咬傷小腿，練習傷口處理原則與需要向醫院說明的關鍵資訊。",
  steps:[
    {type:"action", scene:"一名晨跑的男子被路邊流浪犬追咬，小腿有幾處齒痕傷口在流血，狗已經跑走，旁邊還有其他晨跑民眾圍觀。",
      prompt:"你會先做什麼？",
      correct:{tool:"sceneCheck",target:"scene",explain:"確認那隻狗（或其他流浪動物）是否還在附近，避免自己或其他人再次遭到攻擊，必要時請相關單位協助處理動物。"},
      mistakes:[]},
    {type:"action", scene:"確認安全後，你靠近評估他。",
      prompt:"你會先做什麼？",
      correct:{tool:"generalImpression",target:"patient",
        giRelevant:["leftLeg:legWound","patient:distress"],
        giFindings:{
          "leftLeg:legWound":"小腿有數處深淺不一的齒痕傷口，持續有血滲出",
          "patient:distress":"表情緊張，一直看著剛才狗跑走的方向"
        },
        explain:"觀察傷口的分布與病人的整體反應，動物咬傷的傷口型態跟一般撕裂傷不太一樣，容易合併深部組織損傷。"},
      mistakes:[]},
    {type:"action", scene:"你準備處理傷口。",
      prompt:"你會怎麼做？",
      correct:{tool:"directPressure",target:"leftLeg",
        explain:"咬傷造成的持續出血先以直接加壓處理，動物咬傷的傷口感染風險較高，加壓時也要留意觀察傷口深度與範圍。"},
      mistakes:[]},
    {type:"choice", scene:"血止住後，旁邊圍觀的人七嘴八舌，有人說「那隻狗我常常看到，應該沒打疫苗」，也有人說「不用擔心啦，狂犬病台灣很少見」。",
      question:"這些關於狗隻疫苗接種狀況的資訊，你會怎麼處理？",
      choices:[
        {text:"儘量記錄下目擊者對狗隻的描述與相關資訊（如常出沒地點、外觀特徵），並在交班與後續通報時完整轉達，讓醫院與相關單位進一步評估狂犬病暴露風險與後續處置", correct:true, explain:"動物咬傷案件中，咬人動物的疫苗接種狀況與行蹤是醫院評估是否需要狂犬病暴露後預防注射的重要資訊，應盡量記錄並轉達。"},
        {text:"這些都只是旁人的臆測，沒有官方證實就不需要記錄或轉達給醫院", correct:false, explain:"即使是旁人提供的資訊，仍有參考價值，應該完整記錄並轉達，讓專業人員進一步評估。"},
        {text:"狂犬病在台灣確實少見，這個資訊不用特別放在心上，直接跳過不需要理會", correct:false, explain:"不應該因為疾病少見就完全忽略暴露風險評估，仍應完整記錄相關資訊。"},
        {text:"這是警政或動保單位的工作，救護人員不需要記錄任何跟狗隻有關的資訊", correct:false, explain:"救護人員在現場能取得的目擊資訊很珍貴，應該記錄下來並轉達給後續處理的醫療與相關單位，不是完全不需要理會。"}
      ]},
    {type:"action", scene:"你決定進一步包紮傷口。",
      prompt:"你會怎麼做？",
      correct:{tool:"coverBurn",target:"leftLeg",
        explain:"以乾淨敷料覆蓋傷口，動物咬傷傷口通常不建議現場緊密縫合式包紮，保持適度透氣並儘速送醫做進一步清創評估。"},
      mistakes:[]},
    {type:"action", scene:"包紮完成，準備送醫。",
      prompt:"交班時你會特別說明什麼？",
      correct:{tool:"handoverReport",target:"scene",
        explain:"交班時要說明咬傷的動物種類、目擊到的疫苗接種資訊（若有）、傷口處置經過與受傷時間，這些資訊對醫院評估後續傷口處理與是否需要暴露後預防注射非常重要。"},
      mistakes:[]}
  ]
});
