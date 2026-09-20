SCENARIOS.push({
  id:"special-anaphylaxis", category:"special", difficulty:2,
  title:"蜂螫過敏性休克",
  summary:"蜂螫後全身性過敏反應，練習過敏性休克的辨識與體位處置。",
  steps:[
    {type:"choice", scene:"一名年輕女性在戶外被蜂螫傷後幾分鐘，開始出現全身紅疹、嘴唇腫脹，並說「呼吸有點喘」。",
      question:"這些徵象讓你高度懷疑？",
      choices:[
        {text:"過敏性休克（Anaphylaxis），屬於立即威脅生命的緊急狀況，需優先處理呼吸道與循環，儘速送醫", correct:true, explain:"全身性紅疹、嘴唇腫脹合併呼吸困難是嚴重過敏反應的典型警訊。"},
        {text:"這是被蜂螫後常見的局部過敏反應，塗一些止癢藥膏、觀察一下就可以了", correct:false, explain:"合併全身紅疹與呼吸困難已經不是單純局部反應，是嚴重過敏反應的警訊，不應輕視。"},
        {text:"她可能是因為被蜂螫嚇到而換氣過度，情緒穩定下來呼吸應該就會恢復正常", correct:false, explain:"紅疹、嘴唇腫脹、呼吸喘都是客觀的生理反應，不是單純情緒緊張造成的換氣過度。"},
        {text:"針對螫傷部位冰敷消腫止痛，密切觀察局部反應有沒有持續擴大就好", correct:false, explain:"目前是全身性的過敏反應，遠比局部螫傷處置更緊急，需要優先處理呼吸道與循環。"}
      ]},
    {type:"action", scene:"你觸診她的脈搏，感覺弱而快。",
      prompt:"現場處置你應優先給予？",
      correct:{tool:"oxygenMask",target:"head",
        oxygenSpec:{device:"nonRebreather", flowMin:10, flowMax:15},
        reading:"血壓 82/50 mmHg，脈搏 132次/分",
        explain:"呼吸窘迫合併低血壓的過敏性休克，需要高濃度氧氣（非再吸入面罩，10-15 L/min），並讓她採取適合的體位，避免突然站立走動。"},
      mistakes:[{tool:"history",target:"patient",explain:"目前最緊急的是處理呼吸與循環，問診可稍後進行。"}]},
    {type:"action", scene:"給氧後，你留意她身上有醫師處方的腎上腺素自動注射筆。",
      prompt:"你會怎麼做？",
      correct:{tool:"epiPenAssist",target:"leftLeg",altTargets:["rightLeg"],explain:"若病患本身有醫師處方的腎上腺素自動注射筆，可依當地規範協助使用（常見注射於大腿外側），並儘速送醫。"},
      mistakes:[{tool:"tourniquet",target:"leftLeg",explain:"沒有大出血，止血帶不適用於此情況。"}]},
    {type:"action", scene:"送醫途中她的嘴唇腫脹感覺加重，呼吸更喘。",
      prompt:"你應該？",
      correct:{tool:"ongoingMonitor",target:"patient",explain:"過敏反應可能快速惡化為呼吸道完全阻塞，需持續密切監測呼吸道變化，並及早通報接收醫院做好準備。"},
      mistakes:[]}
  ]
});
