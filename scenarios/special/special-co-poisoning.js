SCENARIOS.push({
  id:"special-co-poisoning", category:"special", difficulty:3,
  title:"密閉房間裡的一家三口",
  summary:"冬天緊閉門窗的房間裡，一家人同時感到不適，數據會誤導你，小心陷阱。",
  steps:[
    {type:"action", scene:"冬天你接獲通報，一家三口在房間裡都感到頭痛、暈眩、噁心，房間門窗緊閉，牆角有一個正在燃燒的瓦斯熱水器。",
      prompt:"你踏入房間前應該？",
      correct:{tool:"sceneCheck",target:"scene",explain:"密閉空間內多人同時出現頭痛暈眩，合併燃燒設備，須高度懷疑空氣中有有害氣體，應先設法通風、必要時等待具備偵測/防護裝備的人員協助，避免自己也中毒昏迷。"},
      mistakes:[{tool:"verbalCheck",target:"patient",explain:"密閉空間內多人同時發病，可能是環境毒性物質造成，貿然進入可能使你自己也中毒。"}]},
    {type:"action", scene:"確認通風並排除立即危險後，你進入查看，媽媽坐在地上，兩個孩子躺在旁邊，都說頭很痛、想吐。",
      prompt:"你先做什麼？",
      correct:{tool:"generalImpression",target:"patient",
        giRelevant:["patient:sceneClue","patient:distress"],
        giFindings:{
          "patient:sceneClue":"密閉房間、門窗緊閉，牆角有燃燒中的熱水器，一家三口都有類似不適",
          "patient:distress":"看起來頭暈不適，但目前還能自行對答"
        },
        explain:"多人同時出現類似症狀是重要線索，建立整體印象時要特別留意環境暴露的可能性，而不是只看單一病人。"},
      mistakes:[]},
    {type:"action", scene:"你靠近媽媽，她意識還算清楚但反應有點遲鈍，你觀察她的胸廓起伏。",
      prompt:"你會怎麼確認呼吸速率？",
      correct:{tool:"lookListenFeel",target:"chest",respRate:18,
        reading:"18次/分",
        explain:"呼吸速率是初步評估的重要一環，須配合胸廓起伏實際數出來，不能用猜的。"},
      mistakes:[]},
    {type:"action", scene:"呼吸速率確認後，你想進一步了解她的血氧狀況。",
      prompt:"你會用急救包裡的什麼器材檢查？",
      correct:{tool:"pulseOximeter",target:"leftArm",
        reading:"SpO2 99%，脈搏 92次/分",
        explain:"血氧計夾在手指上量測，是評估換氣與循環狀況的常用工具之一。"},
      mistakes:[]},
    {type:"choice", scene:"血氧測起來99%、呼吸18次/分，數字看起來都在正常範圍，但媽媽仍然頭痛、噁心、反應遲鈍，兩個孩子也有類似症狀。",
      question:"血氧數值看起來正常，但綜合「多人同時發病＋密閉空間燃燒設備＋頭痛噁心」的表現，你判斷？",
      choices:[
        {text:"高度懷疑一氧化碳中毒，這種中毒下血氧數值不可靠，應立即給予高濃度氧氣並儘速將所有人撤離現場送醫", correct:true, explain:"一氧化碳與血紅素結合的能力遠強於氧氣，會佔據血紅素卻不影響一般脈搏血氧儀的讀數，因此血氧「看起來正常」是這種中毒的經典陷阱。多人同時發病＋密閉空間燃燒源，是最重要的線索。"},
        {text:"血氧與呼吸數字都正常，可能只是密閉空間悶熱缺氧造成的暈眩，開窗通風、觀察一段時間即可", correct:false, explain:"這種情境下血氧數值本身不可靠，不能單憑數字正常就排除中毒，應積極處置而非單純觀察。"},
        {text:"懷疑是熱水器漏氣導致可燃氣體累積，應優先請人檢查關閉瓦斯來源，病人症狀之後再處理", correct:false, explain:"病人的症狀需要立即處置，不應把醫療處置排在檢查瓦斯來源之後，兩者其實可以同時進行。"},
        {text:"血氧99%代表換氣功能沒有問題，這些症狀比較像是密閉空間造成的環境焦慮反應", correct:false, explain:"多人同時出現一致的生理症狀，合併明確的燃燒源暴露史，不太符合單純焦慮反應的解釋。"}
      ]},
    {type:"action", scene:"你決定處理媽媽與兩個孩子。",
      prompt:"現場處置你會優先給予？",
      correct:{tool:"oxygenMask",target:"head",
        oxygenSpec:{device:"nonRebreather", flowMin:10, flowMax:15},
        explain:"這類中毒的關鍵處置是給予最高濃度的氧氣（非再吸入面罩，接近100%），加速置換體內與血紅素結合的有害氣體，並將所有暴露者一併撤離、儘速送醫評估。"},
      mistakes:[]}
  ]
});
