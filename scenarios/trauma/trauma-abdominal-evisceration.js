SCENARIOS.push({
  id:"trauma-abdominal-evisceration", category:"trauma", difficulty:3,
  title:"腹部穿刺合併腸脫出",
  summary:"練習腹部重大創傷、休克警覺、保護脫出組織與避免不當處置。",
  realCase:{title:"2014 年高雄氣爆事件",summary:"氣爆與道路破壞可能造成穿刺、鈍性與燒傷等混合創傷；大量傷患處置必須先完成現場安全與快速分流。",learningPoint:"本題練習腹部開放性傷口與休克警訊；真實災害中不能只專注一名傷者，也要注意持續性危險與資源分配。",source:"https://en.wikipedia.org/wiki/2014_Kaohsiung_gas_explosions"},
  steps:[
    {type:"action", scene:"工地金屬桿刺入患者腹部後拔出，患者坐在地上，周圍仍有尖銳金屬與機具。", prompt:"接近患者前？",
      correct:{tool:"sceneCheck",target:"scene",explain:"先排除尖銳物、機具與其他現場危險，確認救援者能安全接近。"},mistakes:[]},
    {type:"action", scene:"患者清醒、腹部有開放性傷口，部分組織脫出，沒有明顯大量外出血但臉色蒼白。", prompt:"你先評估什麼？",
      correct:{tool:"pulseCheck",target:"neck",reading:"頸動脈 118次/分，細弱；皮膚蒼白濕冷",explain:"腹部穿刺可能有內出血，需快速評估循環與休克徵象，不能只看外出血量。"},mistakes:[]},
    {type:"choice", scene:"腹部傷口有組織脫出，患者口渴且疼痛明顯。", question:"哪個做法正確？",
      choices:[
        {text:"用無菌或乾淨的濕敷料覆蓋脫出組織，不將組織推回腹腔，避免進食飲水並快速後送",correct:true,explain:"脫出組織應保護其濕潤與潔淨，不能推回腹腔，也不應讓患者進食飲水。實際材料與流程依受訓範圍及單位規範。"},
        {text:"把脫出組織推回去，再用力加壓傷口",correct:false,explain:"不要把脫出組織推回腹腔，也不能對脫出組織直接加壓。"},
        {text:"讓患者喝水補充體力，等待疼痛減輕",correct:false,explain:"可能需要麻醉或手術處置，創傷患者不應自行進食飲水。"},
        {text:"用冰塊直接敷在脫出組織上降低腫脹",correct:false,explain:"冰塊直接接觸可能造成組織傷害，應以乾淨適當敷料保護。"}
      ]},
    {type:"action", scene:"傷口已受到保護，患者仍蒼白且脈搏快速，等待快速後送。", prompt:"你要如何安排？",
      correct:{tool:"positionPatient",target:"patient",positionSpec:{position:"supineNeutral"},explain:"依患者狀況維持平躺、中立與保暖，避免不必要移動並準備快速後送。"},mistakes:[]},
    {type:"action", scene:"後送前患者開始嗜睡，呼吸變快。", prompt:"接下來？",
      correct:{tool:"ongoingMonitor",target:"patient",explain:"意識與呼吸變化可能代表休克或其他惡化，需持續重新評估並立即交班。"},mistakes:[]}
  ]
});