SCENARIOS.push({
  id:"special-febrile-seizure", category:"special", difficulty:2,
  title:"發燒後突然抽搐的小孩",
  summary:"2歲高燒幼兒突然全身僵直抽動，家長慌張，你抵達時抽搐剛好停止。",
  steps:[
    {type:"action", scene:"你接獲通報，一名2歲幼兒發高燒後突然全身僵直、四肢抽動，家長嚇壞了打電話求救，你抵達時抽搐剛好停止，孩子躺在媽媽懷裡昏昏沉沉。",
      prompt:"抵達後第一步？",
      correct:{tool:"sceneCheck",target:"scene",explain:"任何案件都先確認環境安全，同時觀察周圍是否有讓家長更安心的空間進行評估。"},
      mistakes:[]},
    {type:"action", scene:"你靠近孩子，媽媽說「他發燒到快40度，剛剛突然抖了大概1分鐘」。",
      prompt:"你會先？",
      correct:{tool:"verbalCheck",target:"patient",explain:"評估抽搐後的意識狀態（postictal），這階段昏昏沉沉、反應較慢是常見的，但仍需確認程度並持續觀察是否恢復。"},
      mistakes:[]},
    {type:"action", scene:"孩子對聲音有反應但仍有點恍神，呼吸道通暢、呼吸正常。",
      prompt:"你會測量什麼？",
      correct:{tool:"thermometer",target:"patient",
        reading:"39.8°C",
        explain:"確認體溫數值，合併抽搐病史，是評估熱痙攣可能性的重要資訊。"},
      mistakes:[]},
    {type:"choice", scene:"體溫39.8°C，抽搐大約持續1分鐘後自行停止，這是孩子第一次發生這種狀況。",
      question:"高燒合併短暫抽搐，最可能的情況是什麼，你會怎麼看待這件事？",
      choices:[
        {text:"很可能是兒童常見的「熱痙攣」，但仍應完整評估ABC並送醫確認，不能單憑猜測就排除其他更嚴重的原因（如中樞神經感染）", correct:true, explain:"熱痙攣在幼兒中相對常見且多數預後良好，但現場無法百分之百排除腦膜炎等其他嚴重病因，尤其是第一次發作，仍應完整評估並送醫由醫師確認。"},
        {text:"熱痙攣在幼兒中很常見，先讓他吃退燒藥、在家觀察就好，不需要特地送醫檢查", correct:false, explain:"即使高度懷疑是熱痙攣，第一次發作仍建議送醫評估，以排除其他更嚴重的可能原因。"},
        {text:"只要發生過一次抽搐，就代表孩子以後可能罹患癲癇，之後每次發燒都要特別留意", correct:false, explain:"單次熱痙攣不等於癲癇診斷，現場不應該就此對家長做出這樣的長期病程判斷。"},
        {text:"退燒之後身體狀況會恢復正常，代表已經沒有再次抽搐的風險，可以不用再進一步評估", correct:false, explain:"退燒並不保證不會再次發作，仍需要完整的評估與持續觀察，而不是退燒後就結束處置。"}
      ]},
    {type:"action", scene:"你決定準備送醫，孩子仍有點嗜睡。",
      prompt:"你會協助他採取什麼姿勢？",
      correct:{tool:"positionPatient",target:"patient",positionSpec:{position:"recovery"},explain:"抽搐後意識未完全恢復的病人，側躺的復甦姿勢有助於保護呼吸道，避免嘔吐物或分泌物造成嗆入。"},
      mistakes:[]},
    {type:"action", scene:"送醫途中。",
      prompt:"你應該？",
      correct:{tool:"ongoingMonitor",target:"patient",explain:"持續監測意識恢復狀況與生命徵象，留意是否有再次抽搐、意識持續不清或其他惡化徵象。"},
      mistakes:[]}
  ]
});
