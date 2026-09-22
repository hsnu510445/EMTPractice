SCENARIOS.push({
  id:"medical-chest-pain", category:"assessment", difficulty:2,
  title:"胸痛冒汗的中年女性",
  summary:"居家胸痛病患，練習OPQRST病史詢問與急性冠心症候群警覺。",
  steps:[
    {type:"action", scene:"家屬說52歲女性突然說胸口很不舒服，坐在沙發上，臉色蒼白冒汗。",
      prompt:"抵達後第一步？",
      correct:{tool:"sceneCheck",target:"scene",explain:"任何案件都先確認安全與防護。"},
      mistakes:[]},
    {type:"action", scene:"你靠近後她能清楚跟你對話，說「胸口壓著很痛」，你準備開始評估。",
      prompt:"在深入詢問疼痛細節前，你會先做什麼？",
      correct:{tool:"primaryAssessment",target:"patient",explain:"胸痛病人仍應先完成初次評估的完整骨架（意識、呼吸道、呼吸、循環、優先度），確認沒有立即威脅生命的問題，才進入詳細的症狀詢問。"},
      mistakes:[]},
    {type:"action", scene:"初次評估沒有發現立即威脅生命的問題。",
      prompt:"針對疼痛主訴，你會用什麼工具詳細詢問？",
      correct:{tool:"history",target:"patient",explain:"OPQRST（發作方式/誘發或緩解/性質/是否轉移/嚴重度/持續時間）是針對症狀細節詢問的標準工具。"},
      mistakes:[]},
    {type:"choice", scene:"她說「痛感像有東西壓著，會延伸到左手臂，休息也沒有改善，大概20分鐘了」。",
      question:"這樣的描述最符合？",
      choices:[
        {text:"典型急性冠心症候群（疑似心肌梗塞）警訊，屬於高優先傷病，需儘速給氧評估並送醫", correct:true, explain:"壓迫感、轉移至手臂、休息未緩解、持續超過數分鐘，都是急性冠心症候群的典型警訊。"},
        {text:"比較像姿勢不良造成的肌肉拉傷，休息一下應該就會自己緩解，可以先觀察看看", correct:false, explain:"肌肉拉傷通常和特定動作有關，休息後會漸漸緩解，這裡的描述（壓迫感、轉移到手臂、休息無改善）不太符合。"},
        {text:"聽起來比較像吃太快或太油膩造成的消化不良，脹氣壓迫的感覺很常見", correct:false, explain:"轉移到手臂、休息未緩解這些特徵不是單純消化不良常見的表現，不應優先考慮這個方向。"},
        {text:"她可能是因為緊張焦慮引發的過度換氣，情緒穩定下來症狀通常會跟著改善", correct:false, explain:"不應在完整評估前就把可能危及生命的心臟疾病排除，優先當作情緒問題處理。"}
      ]},
    {type:"action", scene:"你評估生命徵象。",
      prompt:"你會先測量什麼？",
      correct:{tool:"bloodPressure",target:"leftArm",altTargets:["rightArm"],
        reading:"96/64 mmHg，脈搏 108次/分",
        explain:"疑似心臟疾病病人應盡早測量並記錄基礎生命徵象，作為後續變化的比較基準。"},
      mistakes:[]},
    {type:"action", scene:"量完血壓後。",
      prompt:"此時你應優先執行？",
      correct:{tool:"positionPatient",target:"patient",
        positionSpec:{position:"semiFowler"},
        explain:"疑似心臟疾病病人適合半坐臥等舒適姿勢，並依評估給予氧氣、儘速送醫，避免平躺抬腳增加心臟負荷。"},
      mistakes:[{tool:"oxygenMask",target:"head",explain:"給氧固然重要，但此時優先要讓病人採取合適體位，兩者會一起進行。"}]},
    {type:"emergency", timeLimit:8, randomChance:0.4, scene:"病人突然癱軟、沒有反應，且沒有正常呼吸。現場只剩你和一名家屬。",
      question:"此刻最優先的反應？",
      choices:[
        {text:"立即請家屬撥打119並取得AED，同時開始CPR胸部按壓", correct:true, explain:"無反應且沒有正常呼吸應立即啟動求救、取得AED並開始CPR，不能先花時間完成一般病史或量測。"},
        {text:"先測量血壓與血氧，確認數值後再決定是否需要CPR", correct:false, explain:"無反應且沒有正常呼吸時，不能等待血壓或血氧數值；應立即啟動CPR與AED流程。"},
        {text:"先讓病人採半坐臥，並詢問家屬是否有心臟病史", correct:false, explain:"病人已無反應且沒有正常呼吸，姿勢與病史詢問都不能優先於CPR、AED與119。"},
        {text:"先給氧觀察幾分鐘，若仍沒有改善再開始胸部按壓", correct:false, explain:"無正常呼吸不可等待觀察或只給氧，應立即開始胸部按壓並使用AED。"}
      ]},
    {type:"choice", scene:"你完成SAMPLE病史，得知她有高血壓病史，正在服用降血壓藥物。",
      question:"這項病史資訊在交班時為什麼重要？",
      choices:[
        {text:"慢性病史與用藥史能幫助醫院判斷病因與後續治療方向，應完整記錄並於交班時告知", correct:true, explain:"完整的SAMPLE病史是送醫交班的重要內容之一。"},
        {text:"這類病史資訊到院後醫院會重新問診確認，救護階段記錄大概的印象就好，不用太仔細", correct:false, explain:"病史資訊在救護階段就應該盡量問清楚並完整記錄，對醫院診斷治療同樣重要，不是到院後才重新確認即可。"},
        {text:"用藥史屬於病人的個人隱私，救護人員在現場不太適合主動詢問這類資訊", correct:false, explain:"病史詢問（SAMPLE）是初步評估必要的一部分，主動詢問用藥史是救護人員的職責範圍，不是不當侵犯隱私。"},
        {text:"SAMPLE病史詢問主要是設計給創傷病人使用，胸痛這類醫療病人不一定需要問", correct:false, explain:"SAMPLE同樣適用於醫療病人，胸痛病人的病史與用藥史對醫院判斷病因非常重要。"}
      ]},
    {type:"action", scene:"送醫途中。",
      prompt:"你應持續？",
      correct:{tool:"ongoingMonitor",target:"patient",explain:"持續評估貫穿整個救護過程，尤其疑似心臟疾病病人狀況可能快速變化。"},
      mistakes:[]}
  ]
});
