SCENARIOS.push({
  id:"special-severe-bleeding-field", category:"special", difficulty:2,
  title:"登山步道上的大量出血",
  summary:"結合現場安全、嚴重出血優先處置與持續監測，練習在不方便搬運的環境快速處理。",
  steps:[
    {type:"action", scene:"登山步道上，一名男子滑倒後大腿被尖銳岩石割傷，鮮血快速流出。地面濕滑且附近還有其他登山客。",
      prompt:"第一步？",
      correct:{tool:"sceneCheck",target:"scene",explain:"先確認地面與周圍環境安全，避免施救者也滑倒受傷。"},mistakes:[]},
    {type:"action", scene:"左大腿持續大量出血，患者清醒但臉色逐漸蒼白。",
      prompt:"你會先做什麼？",
      correct:{tool:"directPressure",target:"leftLeg",explain:"對立即威脅生命的大量出血應優先直接加壓止血。"},mistakes:[]},
    {type:"action", scene:"持續直接加壓後仍有大量出血。",
      prompt:"下一步？",
      correct:{tool:"pressureDressing",target:"leftLeg",explain:"可持續加壓並使用加壓包紮控制出血。"},mistakes:[]},
    {type:"action", scene:"加壓包紮後仍無法有效控制大出血。",
      prompt:"此時？",
      correct:{tool:"tourniquet",target:"leftLeg",explain:"對無法以直接加壓控制的嚴重肢體出血，依訓練與單位規範使用止血帶並記錄時間。"},mistakes:[]},
    {type:"action", scene:"出血已控制，但患者臉色仍蒼白、心跳很快。",
      prompt:"接下來？",
      correct:{tool:"ongoingMonitor",target:"patient",reading:"脈搏 124次/分；血壓 94/62 mmHg",explain:"止血後仍需持續監測失血與休克相關徵象並儘速送醫。"},mistakes:[]}
  ]
});
