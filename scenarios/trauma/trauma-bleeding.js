SCENARIOS.push({
  id:"trauma-bleeding", category:"trauma", difficulty:2,
  title:"刀傷大出血",
  summary:"工地意外造成兩處傷口，練習判斷哪一處要優先止血，以及止血優先順序：加壓→加壓包紮→止血帶。",
  steps:[
    {type:"action", scene:"一名男性在工地被玻璃割傷，你看到他左小腿有一道約8公分的傷口，鮮血持續湧出、浸濕褲管且無法自行停止；同時右前臂也有一道約2公分的擦挫傷，僅有少量滲血。意識清醒但臉色略顯緊張。",
      prompt:"現場安全確認後，你的第一處置優先是？",
      correct:{tool:"directPressure",target:"leftLeg",explain:"左小腿的傷口持續大量出血、無法自行停止，屬於立即威脅生命的問題，應優先處理；右前臂只是少量滲血的擦挫傷，優先度遠低於此。"},
      mistakes:[{tool:"directPressure",target:"rightArm",explain:"右前臂只是少量滲血的表淺擦挫傷，不是立即威脅生命的出血。應優先處理出血量大、持續且無法自行停止的左小腿傷口，兩處傷口的嚴重度差很多，要先處理真正緊急的那一處。"}]},
    {type:"action", scene:"你用紗布直接加壓左小腿的傷口止血，但血液持續滲出紗布。",
      prompt:"下一步？",
      correct:{tool:"pressureDressing",target:"leftLeg",explain:"應持續加壓並可疊加敷料形成加壓包紮，避免頻繁掀開已形成的血凝塊影響止血。"},
      mistakes:[]},
    {type:"action", scene:"持續加壓左小腿後仍大量出血，肢體末端出血無法有效控制。",
      prompt:"此時可考慮？",
      correct:{tool:"tourniquet",target:"leftLeg",explain:"當直接加壓無法控制的肢體大出血時，止血帶是有效的處置，須記錄使用時間。"},
      mistakes:[]},
    {type:"action", scene:"左小腿的止血帶使用後出血得到控制，你回頭看一下右前臂的擦挫傷。",
      prompt:"右前臂的傷口你會如何處理？",
      correct:{tool:"coverBurn",target:"rightArm",explain:"表淺、出血量少的傷口，直接覆蓋乾淨敷料保護傷口即可，不需要動用止血帶等大出血處置，資源應留給真正需要的傷口。"},
      mistakes:[{tool:"tourniquet",target:"rightArm",explain:"少量滲血的表淺傷口不需要止血帶，止血帶用於肢體大出血且直接加壓無法控制的情況，用在這裡並不恰當且會造成不必要的肢體傷害。"}]},
    {type:"action", scene:"兩處傷口都處理完成。",
      prompt:"你應該？",
      correct:{tool:"ongoingMonitor",target:"patient",
        reading:"脈搏 118次/分；血壓 102/70 mmHg",
        explain:"止血帶一旦使用不應現場反覆鬆開檢查，應持續監測失血性休克徵象並儘速送醫。"},
      mistakes:[]}
  ]
});
