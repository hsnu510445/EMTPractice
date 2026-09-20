SCENARIOS.push({
  id:"trauma-amputation", category:"trauma", difficulty:3,
  title:"機械夾傷造成創傷性截肢",
  summary:"練習致命性肢體出血、止血帶決策、斷肢保存與休克監測。",
  realCase:{title:"ACS Stop the Bleed（真實致命出血案例與訓練）",summary:"ACS Stop the Bleed指出嚴重出血是受傷後可預防死亡的重要原因，訓練重點包括辨識致命出血與立即控制。",learningPoint:"本題把直接加壓、加壓包紮、止血帶與記錄時間串成完整流程，也提醒要同時照顧患者循環與保存斷肢。",source:"https://www.stopthebleed.org/"},
  steps:[
    {type:"action",scene:"工廠機械突然啟動，一名工人的左前臂遭夾斷，機械旁仍有電源與移動部件。",prompt:"第一步？",correct:{tool:"sceneCheck",target:"scene",explain:"先停止機械與確認電源安全，未排除危險前不能直接接觸患者。"},mistakes:[]},
    {type:"action",scene:"電源已切斷，左前臂近端有大量噴射性出血，患者清醒但臉色蒼白。",prompt:"立即處置？",correct:{tool:"directPressure",target:"leftArm",explain:"先對出血點直接加壓；這是立即威脅生命的肢體出血，優先於其他非急迫處置。"},mistakes:[]},
    {type:"action",scene:"持續加壓後仍有大量出血，敷料很快被浸透。",prompt:"下一步？",correct:{tool:"tourniquet",target:"leftArm",explain:"直接加壓無法控制的肢體大出血可使用止血帶，應放在適當位置、記錄使用時間並交班。"},mistakes:[]},
    {type:"action",scene:"止血帶已有效控制出血，隊友找到掉落的斷肢。",prompt:"斷肢如何處理？",correct:{tool:"preserveEvidence",target:"scene",explain:"以乾淨適當方式保護並保存斷肢，和患者一同快速送醫；不要直接把斷肢放在冰塊上或浸水。"},mistakes:[]},
    {type:"action",scene:"患者仍蒼白、脈搏快速，等待後送。",prompt:"途中？",correct:{tool:"ongoingMonitor",target:"patient",reading:"脈搏 126次/分，皮膚濕冷，意識仍可對答",explain:"持續監測失血性休克徵象，不要為了檢查而反覆鬆開止血帶。"},mistakes:[]}
  ]
});
