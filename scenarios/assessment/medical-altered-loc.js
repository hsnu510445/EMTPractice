SCENARIOS.push({
  id:"medical-altered-loc", category:"assessment", difficulty:2,
  title:"居家意識改變的長輩",
  summary:"疑似腦中風的老年病患，練習醫療案件的初步評估與快速中風判斷。",
  steps:[
    {type:"action", scene:"家人說78歲阿公突然講話變得不清楚，坐在椅子上。",
      prompt:"抵達前已知是醫療案件而非外傷，你第一步？",
      correct:{tool:"sceneCheck",target:"scene",explain:"無論創傷或醫療案件，現場安全與標準防護（BSI）永遠是第一步。"},
      mistakes:[{tool:"history",target:"patient",explain:"應先做安全評估與防護，才接觸並詢問病史。"}]},
    {type:"action", scene:"你進門後看到阿公坐在椅子上，看你進來眼睛有轉動但講話含糊不清。",
      prompt:"建立整體印象後，下一步？",
      correct:{tool:"verbalCheck",target:"patient",explain:"初步評估的第一項就是意識程度（AVPU），接著才是ABC。"},
      mistakes:[{tool:"history",target:"patient",explain:"應先完成初步評估ABC才問病史。"}]},
    {type:"action", scene:"阿公對你的問題只能發出聲音，無法完整回答，符合V（對聲音有反應）。呼吸道通暢，呼吸尚可。",
      prompt:"你接下來？",
      correct:{tool:"pulseCheck",target:"neck",
        reading:"頸動脈 88次/分，規律；皮膚溫暖乾燥",
        explain:"依ABC順序，呼吸評估完成後接著評估循環（脈搏與皮膚），並準備給氧。"},
      mistakes:[]},
    {type:"action", scene:"你觀察到阿公右邊嘴角下垂、右手無法用力抬起。",
      prompt:"這些徵象讓你懷疑中風，你該使用什麼工具快速評估？",
      correct:{tool:"fastStrokeCheck",target:"head",explain:"臉部下垂、單側肢體無力、言語不清是典型中風徵象，FAST是常用的快速篩檢工具。"},
      mistakes:[]},
    {type:"choice", scene:"你確認符合FAST三項異常，家屬說「大概40分鐘前開始的」。",
      question:"這個「時間」資訊為什麼重要？",
      choices:[
        {text:"中風治療有黃金時間窗，記錄發作時間有助醫院判斷治療方式，應盡速送醫並回報症狀發生時間", correct:true, explain:"許多中風治療方式對時間非常敏感，準確記錄與回報發作時間是救護人員的重要任務。"},
        {text:"時間只是病歷上的紀錄欄位，跟醫院實際會採取的治療方式沒有直接關係", correct:false, explain:"時間資訊會直接影響醫院可以採取哪些治療選項，不只是紀錄用途。"},
        {text:"如果已經超過一般認知的黃金時間，代表治療效果有限，送醫的急迫性可以降低", correct:false, explain:"即使超過部分治療的時間窗，仍應盡速送醫，由醫院評估還能採取哪些處置。"},
        {text:"時間點交給家屬記得就好，救護人員抵達現場後應優先專注在生命徵象測量", correct:false, explain:"發作時間是救護人員應主動詢問並記錄清楚的重要資訊，不應只依賴家屬記憶且事後才補問。"}
      ]},
    {type:"action", scene:"你決定送醫。",
      prompt:"送醫途中你應該？",
      correct:{tool:"ongoingMonitor",target:"patient",explain:"疑似中風病人吞嚥功能可能受損，經口給予食物水分有嗆入風險，應禁食並持續監測意識與生命徵象。"},
      mistakes:[]}
  ]
});
