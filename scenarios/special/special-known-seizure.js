SCENARIOS.push({
  id:"special-known-seizure", category:"special", difficulty:1,
  title:"公園裡已知癲癇病史的發作",
  summary:"有癲癇病史的年輕人在公園發作抽搐，練習一般癲癇發作後的標準處置與何時該提高警覺。",
  steps:[
    {type:"action", scene:"你到達時，一名25歲男性剛結束抽搐躺在公園草地上，同行朋友說他有癲癇病史，剛剛抽搐了大約1分鐘。",
      prompt:"你會先做什麼？",
      correct:{tool:"sceneCheck",target:"scene",explain:"確認周圍環境沒有其他危險物品或人車靠近，維持一個安全的評估空間。"},
      mistakes:[]},
    {type:"action", scene:"確認安全後，你靠近他。",
      prompt:"你會先做什麼？",
      correct:{tool:"generalImpression",target:"patient",
        giRelevant:["patient:posture","patient:distress"],
        giFindings:{
          "patient:posture":"側躺在地上，全身放鬆，抽動已經停止",
          "patient:distress":"看起來昏沉嗜睡，對周圍反應遲鈍"
        },
        explain:"觀察他抽搐停止後的整體狀態，嗜睡與意識模糊是發作後常見的表現。"},
      mistakes:[]},
    {type:"action", scene:"你評估他的意識程度。",
      prompt:"你會怎麼做？",
      correct:{tool:"verbalCheck",target:"patient",explain:"確認發作後意識恢復的程度，這類「發作後期」的意識模糊通常會逐漸改善。"},
      mistakes:[]},
    {type:"choice", scene:"朋友說「他有癲癇病史很多年了，這種發作他常常有，通常幾分鐘就會清醒，我們正常都不會送醫」。",
      question:"你會怎麼判斷是否需要送醫？",
      choices:[
        {text:"已知癲癇病史仍要確認這次發作的時間、有沒有連續發作或受傷、跟平常是否不同，都正常才考慮不送醫", correct:true, explain:"已知癲癇病史不代表每次發作都可以直接不送醫，仍需要確認這次發作是否跟平常一樣、有無新增的異常，才能做出安全的判斷。"},
        {text:"只要朋友說他平常都這樣、不需要送醫，就可以尊重朋友說法直接離開現場", correct:false, explain:"不應該只憑旁人的說法就完全省略評估，仍需要確認這次發作的實際狀況。"},
        {text:"已知癲癇病史的患者，發作後一律不需要做任何進一步評估或送醫建議", correct:false, explain:"即使是已知病史，仍應評估這次發作是否有異常之處，不能一概而論不評估。"},
        {text:"只要他還躺著沒有起身，就直接判斷一定需要強制送醫，不用再確認其他資訊", correct:false, explain:"是否需要送醫應該根據完整評估的結果來判斷，而不是單憑他還躺著這件事。"}
      ]},
    {type:"action", scene:"你想進一步了解狀況。",
      prompt:"你會怎麼做？",
      correct:{tool:"history",target:"patient",
        reading:"朋友表示這次抽搐大約持續1分鐘、跟平常發作型態差不多，他最近有規律服藥，沒有漏藥，也沒有頭部外傷病史",
        explain:"詢問這次發作的持續時間、型態是否跟平常一致、用藥遵從度與是否有外傷，這些資訊能幫助判斷是否為單純的規律發作。"},
      mistakes:[]},
    {type:"action", scene:"確認狀況後，他逐漸恢復意識，能正確回答簡單問題。",
      prompt:"接下來你會做什麼？",
      correct:{tool:"ongoingMonitor",target:"patient",explain:"持續觀察意識恢復程度與有無再次發作的跡象，逐漸清醒且沒有其他異常，才能安心評估後續處置。"},
      mistakes:[]}
  ]
});
