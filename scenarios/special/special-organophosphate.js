SCENARIOS.push({
  id:"special-organophosphate", category:"special", difficulty:3,
  title:"農田裡的異常症狀",
  summary:"農夫倒在噴藥機旁，全身分泌物異常增多，先想想你自己的安全。",
  steps:[
    {type:"action", scene:"農田裡一名農夫倒在噴藥機旁，地上有農藥空罐，他全身大量出汗、口水不停流出，肌肉不自主抽動。",
      prompt:"接觸他之前你要特別注意什麼？",
      correct:{tool:"gloves",target:"self",explain:"某些農藥可經皮膚吸收，直接接觸病人衣物或皮膚可能讓你自己也出現中毒症狀，須確實穿戴手套等防護裝備，必要時考慮先移除污染衣物再處理。"},
      mistakes:[{tool:"verbalCheck",target:"patient",explain:"在做好防護之前直接接觸，殘留藥劇可能經皮膚吸收到你身上。"}]},
    {type:"action", scene:"做好防護後，你觀察他的臉部。",
      prompt:"建立整體印象，你會？",
      correct:{tool:"generalImpression",target:"patient",
        giRelevant:["head:pupils","head:drooling"],
        giFindings:{
          "head:pupils":"瞳孔明顯縮小",
          "head:drooling":"分泌物明顯增多，不斷流口水"
        },
        explain:"觀察到瞳孔異常縮小、合併大量分泌物，是重要的整體印象線索。"},
      mistakes:[]},
    {type:"choice", scene:"你觀察到他瞳孔看起來異常縮小，合併大量出汗、流口水、肌肉不自主抽動。",
      question:"大量出汗、流口水、瞳孔縮小、肌肉抽動，這樣的組合最符合？",
      choices:[
        {text:"疑似某類農藥（如有機磷類）中毒，過度刺激神經系統造成分泌物增加與肌肉異常，需優先維持呼吸道並儘速送醫", correct:true, explain:"這類中毒典型表現包含過多分泌物（流淚、流口水、出汗）、瞳孔縮小、肌肉抽動等，嚴重時會影響呼吸肌肉造成呼吸衰竭。"},
        {text:"大熱天在農田工作，這比較像是中暑造成的大量出汗與身體不適反應", correct:false, explain:"中暑通常不會合併瞳孔明顯縮小與肌肉不自主抽動，這樣的組合更符合中毒的表現。"},
        {text:"可能是吃壞肚子引起的食物中毒，出汗與肌肉不適是腸胃不舒服造成的反應", correct:false, explain:"瞳孔縮小合併現場的農藥空罐，描述更符合農藥暴露中毒，而不是單純的食物中毒。"},
        {text:"這個季節農忙工作量大，應該只是長時間勞動造成的普通疲勞與不適", correct:false, explain:"瞳孔縮小、大量分泌物、肌肉抽動都是具體且異常的生理徵象，不應該輕視為單純疲勞。"}
      ]},
    {type:"action", scene:"你決定處理他的呼吸道。",
      prompt:"你會做什麼？",
      correct:{tool:"suction",target:"head",explain:"過多的口水與分泌物容易阻塞呼吸道，需要抽吸清除以維持呼吸道通暢。"},
      mistakes:[]},
    {type:"action", scene:"呼吸道清理後。",
      prompt:"接下來你會給予？",
      correct:{tool:"oxygenMask",target:"head",
        oxygenSpec:{device:"simpleMask", flowMin:6, flowMax:10},
        explain:"分泌物與肌肉症狀可能影響呼吸功能，給予氧氣支持呼吸，並儘速送醫。"},
      mistakes:[]},
    {type:"action", scene:"你準備送醫。",
      prompt:"途中你應該？",
      correct:{tool:"ongoingMonitor",target:"patient",explain:"這類中毒病人的分泌物與肌肉症狀可能持續變化甚至惡化，需持續監測呼吸道與呼吸狀況，並在交班時提醒醫院現場的農藥暴露資訊。"},
      mistakes:[]}
  ]
});
