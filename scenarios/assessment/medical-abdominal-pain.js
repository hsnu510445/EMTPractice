SCENARIOS.push({
  id:"medical-abdominal-pain", category:"assessment", difficulty:1,
  title:"突然劇烈腹痛的男子",
  summary:"練習腹痛患者的安全確認、症狀詢問、生命徵象與持續評估。",
  steps:[
    {type:"action", scene:"一名45歲男性坐在家中地板上，雙手抱著上腹部，表示突然出現劇烈腹痛。",
      prompt:"抵達後第一步？",
      correct:{tool:"sceneCheck",target:"scene",explain:"先確認現場安全與基本防護。"},mistakes:[]},
    {type:"action", scene:"患者清醒，可以正常對話，但臉色蒼白、冒冷汗。",
      prompt:"你會先建立什麼？",
      correct:{tool:"generalImpression",target:"patient",giRelevant:["patient:distress"],giFindings:{"patient:distress":"患者清醒但臉色蒼白、冒冷汗，主訴劇烈腹痛"},explain:"先建立整體印象並注意是否存在休克或其他立即危險徵象。"},mistakes:[]},
    {type:"action", scene:"整體印象確認後，你要在深入詢問症狀細節前，先確認有沒有立即威脅生命的問題。",
      prompt:"你會做什麼？",
      correct:{tool:"primaryAssessment",target:"patient",explain:"即使主訴聽起來只是腹痛，仍應先完成初次評估的完整骨架（意識、呼吸道、呼吸、循環、優先度），確認沒有立即威脅生命的問題，才進入更詳細的症狀詢問。"},
      mistakes:[]},
    {type:"action", scene:"患者表示疼痛是突然出現，位於上腹部，且越來越痛。",
      prompt:"你會怎麼進一步詢問？",
      correct:{tool:"history",target:"patient",explain:"使用OPQRST與SAMPLE系統性了解疼痛開始時間、位置、性質、嚴重度、相關症狀與既往病史。"},mistakes:[]},
    {type:"action", scene:"你準備取得基礎生命徵象。",
      prompt:"你會測量？",
      correct:{tool:"bloodPressure",target:"leftArm",altTargets:["rightArm"],reading:"94/62 mmHg，脈搏 116次/分",explain:"腹痛合併蒼白冒汗時應盡早取得生命徵象並觀察循環狀態。"},mistakes:[]},
    {type:"choice", scene:"患者疼痛持續加劇，血壓偏低、脈搏偏快。",
      question:"下一步？",
      choices:[
        {text:"提高警覺、持續監測並儘速送醫評估",correct:true,explain:"劇烈腹痛合併異常生命徵象可能代表嚴重疾病，不宜在現場長時間等待。"},
        {text:"因為沒有外傷，所以可以留在家中觀察",correct:false,explain:"非創傷性疾病同樣可能危及生命。"},
        {text:"先要求患者吃東西看看是否會改善",correct:false,explain:"未釐清病因前不應任意進食。"},
        {text:"只要患者能回答問題，就代表沒有急症",correct:false,explain:"清醒不能排除嚴重內科問題。"}
      ]},
    {type:"action", scene:"準備送醫。",
      prompt:"你會持續？",
      correct:{tool:"ongoingMonitor",target:"patient",explain:"持續觀察意識與生命徵象變化，並將重要病史與測量結果交班。"},mistakes:[]}
  ]
});
