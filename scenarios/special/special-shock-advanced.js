SCENARIOS.push({
  id:"special-shock-advanced", category:"advanced", difficulty:3,
  title:"外傷後臉色蒼白的患者",
  summary:"練習嚴重出血與休克的優先處置，並在選項中辨識 EMT2 依規範建立靜脈路徑與輸液的限制。",
  steps:[
    {type:"action", scene:"工地有一名患者被金屬板割傷大腿，現場仍有移動中的機具。",
      prompt:"你抵達後第一步？",
      correct:{tool:"sceneCheck",target:"scene",explain:"先確認機具與環境安全，避免救護人員成為下一名傷者。"},mistakes:[]},
    {type:"action", scene:"確認安全後，你看到患者右大腿有大量鮮血持續流出。",
      prompt:"最優先的現場處置？",
      correct:{tool:"tourniquet",target:"rightLeg",explain:"四肢致命性出血應立即使用止血帶並記錄使用時間，之後持續重新評估。"},mistakes:[]},
    {type:"action", scene:"止血帶固定後，患者臉色蒼白、冒冷汗，說自己很暈；脈搏又快又弱。",
      prompt:"你要先取得哪項基準資料？",
      correct:{tool:"bloodPressure",target:"leftArm",altTargets:["rightArm"],reading:"86/54 mmHg，脈搏 128次/分",explain:"低血壓與快速微弱脈搏支持休克的可能性，應建立生命徵象基準並持續追蹤。"},mistakes:[]},
    {type:"choice", scene:"患者仍有休克徵象，已完成止血、保暖並準備快速送醫。",
      question:"關於進階處置，哪項敘述正確？",
      choices:[
        {text:"優先維持止血、保暖、給氧與快速送醫，途中持續監測病況變化",correct:true,explain:"現場應先完成可立即降低死亡風險的處置，並縮短到院時間。"},
        {text:"【EMT2限定】依醫療指導建立靜脈路徑並依規範給予輸液，不能因此延誤止血與後送",correct:false,explain:"靜脈路徑與輸液屬於有資格與醫療指導時的進階措施；本題的優先順序仍是止血、保暖、監測與快速後送。"},
        {text:"為了讓血壓回升，先讓患者站起來走動幾分鐘",correct:false,explain:"休克患者應避免自行走動，以免跌倒與循環狀況進一步惡化。"},
        {text:"出血已經變少，所以可以留在現場觀察，不必急著送醫",correct:false,explain:"休克徵象代表仍可能有嚴重內外出血或循環問題，必須儘速送醫。"}
      ]},
    {type:"action", scene:"搬運途中患者越來越嗜睡。",
      prompt:"你應持續？",
      correct:{tool:"ongoingMonitor",target:"patient",explain:"持續重新評估意識、呼吸、脈搏與血壓，若惡化立即通報並準備高級救命處置。"},mistakes:[]}
  ]
});