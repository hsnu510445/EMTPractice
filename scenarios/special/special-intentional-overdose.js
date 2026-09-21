SCENARIOS.push({
  id:"special-intentional-overdose", category:"special", difficulty:2,
  title:"房間裡藥罐散落一地的年輕人",
  summary:"疑似蓄意服藥過量的個案，練習現場安全、證物保留與不帶批判的處置態度。",
  steps:[
    {type:"action", scene:"家屬報案說20歲女兒反鎖房門很久沒回應，破門後發現她躺在床上意識不清，床邊散落好幾個空藥罐與一張紙條。",
      prompt:"你會先做什麼？",
      correct:{tool:"sceneCheck",target:"scene",explain:"這類案件現場可能還有其他風險（例如尖銳物品、其他未知藥物），且家屬情緒可能很激動，先確認環境安全再接觸病人。"},
      mistakes:[]},
    {type:"action", scene:"確認安全後，你靠近評估她。",
      prompt:"你會先做什麼？",
      correct:{tool:"generalImpression",target:"patient",
        giRelevant:["patient:distress","patient:sceneClue"],
        giFindings:{
          "patient:distress":"意識不清、對呼喚反應遲緩",
          "patient:sceneClue":"床邊散落多個空藥罐，種類看起來不只一種"
        },
        explain:"建立整體印象時也要留意現場環境線索，這些對後續處置與交班都很重要。"},
      mistakes:[]},
    {type:"action", scene:"你評估她的意識與呼吸。",
      prompt:"你會怎麼做？",
      correct:{tool:"verbalCheck",target:"patient",explain:"確認意識程度（AVPU），藥物過量可能造成不同程度的意識抑制。"},
      mistakes:[]},
    {type:"choice", scene:"家屬在一旁情緒崩潰，一直重複說「都是我不好，我平常太少關心她了」，同時不斷追問你她會不會有事。",
      question:"你會怎麼回應與處理現場？",
      choices:[
        {text:"專注完成對病人的評估與處置，同時用平穩、不帶批判的語氣簡短回應家屬，儘量避免讓家屬的情緒影響評估流程，必要時請旁人協助安撫", correct:true, explain:"這類案件家屬情緒往往很激動，救護人員應保持專業、不批判的態度，優先完成病人評估，同時適度給予家屬簡短安撫。"},
        {text:"花時間仔細跟家屬討論究竟是什麼原因造成女兒走上這條路，釐清來龍去脈再繼續評估", correct:false, explain:"現場不是釐清事件原因的時機，這時候應該優先完成病人的醫療評估與處置。"},
        {text:"直接跟家屬說這都是他們平常沒關心好造成的，藉此提醒他們以後要多注意", correct:false, explain:"這樣的評論不恰當也不是救護人員的角色，現場不應該對家屬做出這類評斷。"},
        {text:"完全不理會家屬的情緒反應，自顧自完成評估，不給予任何回應", correct:false, explain:"完全忽視家屬的情緒可能讓現場更難掌控，適度、簡短的回應有助於穩定現場。"}
      ]},
    {type:"action", scene:"你注意到床邊的空藥罐與紙條。",
      prompt:"你會怎麼處理這些物品？",
      correct:{tool:"preserveEvidence",target:"scene",
        explain:"保留藥物容器與相關物品（包括紙條），並盡量記錄種類與大概數量，這些資訊對醫院判斷中毒種類與後續處置非常重要，不要任意丟棄或移動。"},
      mistakes:[]},
    {type:"action", scene:"你準備給予呼吸支持與監測。",
      prompt:"你會做什麼？",
      correct:{tool:"oxygenMask",target:"head",
        oxygenSpec:{device:"simpleMask", flowMin:6, flowMax:10},
        explain:"藥物過量可能影響呼吸功能，先給予氧氣支持，並持續密切監測意識與呼吸變化。"},
      mistakes:[]},
    {type:"action", scene:"準備送醫。",
      prompt:"交班時你會特別說明什麼？",
      correct:{tool:"handoverReport",target:"scene",
        explain:"交班時要說明現場發現的藥物種類（若能辨識）、大約數量、發現的時間與病人反應的意識變化，這些資訊對醫院判斷中毒處置非常關鍵；同時保護病人隱私，避免在不必要的場合公開討論細節。"},
      mistakes:[]}
  ]
});
