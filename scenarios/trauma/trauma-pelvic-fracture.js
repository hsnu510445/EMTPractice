SCENARIOS.push({
  id:"trauma-pelvic-fracture", category:"trauma", difficulty:3,
  title:"機車撞擊後的骨盆創傷",
  summary:"練習高能量機轉、休克警訊、減少搬動與快速後送。",
  realCase:{title:"2014 年高雄氣爆事件",summary:"大規模氣爆造成道路破壞、多人傷亡與複合性創傷，提醒救援人員先確認持續性危險，再處理可能有內出血的傷患。",learningPoint:"本題著重骨盆創傷可能造成的內出血與休克；真實災害中還要同時考慮爆炸波、坍塌、燒傷與二次危險。",source:"https://en.wikipedia.org/wiki/2014_Kaohsiung_gas_explosions"},
  steps:[
    {type:"action", scene:"機車騎士被轎車撞飛，倒在路面，現場車流仍密集。", prompt:"第一步？",
      correct:{tool:"sceneCheck",target:"scene",explain:"先確保交通與現場安全，再接近患者，避免二次事故。"},mistakes:[]},
    {type:"action", scene:"患者清醒、呼吸尚可，但臉色蒼白、冒冷汗，表示骨盆與下腹劇痛。", prompt:"你要先快速評估哪一項？",
      correct:{tool:"pulseCheck",target:"neck",reading:"頸動脈 126次/分，細弱；皮膚蒼白濕冷",explain:"高能量機轉合併骨盆或腹部疼痛，需警覺內出血與休克，快速評估循環與皮膚表現。"},mistakes:[]},
    {type:"choice", scene:"患者沒有明顯外出血，但脈搏很快且皮膚濕冷。", question:"正確的處置方向？",
      choices:[
        {text:"視為可能有內出血，減少不必要搬動、保暖、快速後送並持續監測",correct:true,explain:"骨盆創傷可造成大量內出血，外表沒有大量出血不代表循環穩定。"},
        {text:"反覆按壓或搖動骨盆確認是否會痛",correct:false,explain:"不應為了確認而反覆測試，這可能增加出血與疼痛。"},
        {text:"讓患者站起來走動，確認骨盆是否穩定",correct:false,explain:"疑似骨盆創傷時應避免站立與不必要活動。"},
        {text:"因為患者仍清醒，所以先處理擦傷即可",correct:false,explain:"清醒不能排除嚴重內出血，休克警訊應優先處理。"}
      ]},
    {type:"action", scene:"患者需要等待後送，不能自行走動，且疑似脊椎與骨盆受傷。", prompt:"在可用姿勢選擇中，你會如何安排？",
      correct:{tool:"positionPatient",target:"patient",positionSpec:{position:"supineNeutral"},explain:"維持平躺與中立，減少不必要移動，並依單位流程與器材進行整體搬運與固定。"},mistakes:[]},
    {type:"action", scene:"患者等待後送期間意識變慢，脈搏仍快速，皮膚更冰冷。", prompt:"接下來？",
      correct:{tool:"ongoingMonitor",target:"patient",explain:"休克可能惡化，需持續重新評估意識、呼吸、循環與生命徵象，並將變化立即交班。"},mistakes:[]}
  ]
});