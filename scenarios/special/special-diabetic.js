SCENARIOS.push({
  id:"special-diabetic", category:"special", difficulty:2,
  title:"糖尿病患者意識改變",
  summary:"有糖尿病史的長輩意識改變合併冒汗，練習疑似低血糖的處置原則。",
  steps:[
    {type:"action", scene:"家屬說65歲有糖尿病史的爸爸突然變得語無倫次、冒冷汗，你評估他意識程度為V（對聲音有反應）但可配合簡單指令。",
      prompt:"已知有糖尿病史，你會用什麼工具進一步確認？",
      correct:{tool:"glucometer",target:"leftArm",altTargets:["rightArm"],
        reading:"42 mg/dL（2.3 mmol/L）",
        explain:"糖尿病病人意識改變時，血糖測量是重要的鑑別工具之一。"},
      mistakes:[]},
    {type:"choice", scene:"血糖測得42 mg/dL，加上意識改變、冒冷汗，你判斷？",
      question:"你判斷這代表什麼，該優先處理？",
      choices:[
        {text:"低血糖（Hypoglycemia）可能性高，冒冷汗、意識改變是典型徵象，需優先評估並處理", correct:true, explain:"糖尿病史加上突發意識改變合併冒冷汗、血糖數值偏低，是低血糖的典型表現。"},
        {text:"語無倫次合併意識改變，比較像是中風的表現，血糖數值可以先不用列入考慮", correct:false, explain:"血糖數值已經提供重要線索，加上典型的冒冷汗表現，應優先考慮低血糖的可能性。"},
        {text:"可能只是最近作息不正常、體力透支造成的疲勞，讓他休息一下就會好轉", correct:false, explain:"意識改變合併冒冷汗與血糖數值偏低，是具體的異常徵象，不應輕視為單純疲勞。"},
        {text:"這種情況通常會自己慢慢恢復，先在旁邊陪伴觀察，不用太快介入處理", correct:false, explain:"低血糖若未及時處理可能持續惡化甚至造成昏迷，需要積極評估並儘速處置，不應被動等待。"}
      ]},
    {type:"action", scene:"你評估他呼吸道通暢，呼吸正常，但意識程度不足以安全吞嚥（V級，反應遲鈍）。",
      prompt:"此時你應該？",
      correct:{tool:"positionPatient",target:"patient",positionSpec:{position:"recovery"},explain:"意識不足以安全吞嚥時，不可經口給予任何食物或糖分，應以側躺等姿勢確保呼吸道安全並儘速送醫，途中持續監測。"},
      mistakes:[{tool:"oralSugar",target:"head",explain:"意識不足病人經口給食有嗆入吸入性肺炎的風險，不可經口給予。"}]},
    {type:"action", scene:"途中他意識逐漸恢復，變得清醒（A）並能正確回答問題，且能自行安全吞嚥。",
      prompt:"此時你可以？",
      correct:{tool:"oralSugar",target:"head",explain:"意識完全清醒且能安全吞嚥時，可協助給予口服糖分來源，並持續觀察反應，仍建議送醫做進一步評估。"},
      mistakes:[]}
  ]
});
