SCENARIOS.push({
  id:"bls-child-drowning", category:"bls", difficulty:2,
  title:"泳池溺水兒童",
  summary:"8歲兒童溺水無呼吸心跳，練習兒童CPR與後續照護觀念。",
  steps:[
    {type:"choice", scene:"一名8歲兒童在泳池被人拉出水面，意識不清，你抵達現場。",
      question:"第一步？",
      choices:[
        {text:"確認自身安全與周遭環境，再靠近評估孩子的狀況", correct:true, explain:"非受過水中救援訓練者貿然下水風險高，應先確保自身安全，孩子已經被拉上岸，重點是儘快開始評估。"},
        {text:"孩子還可能沒有完全脫離危險，應立即跳下水把他帶到更安全的位置", correct:false, explain:"孩子已經被拉上岸了，此時不需要也不應該貿然下水，重點是儘快評估他目前的呼吸與意識狀況。"},
        {text:"優先確認孩子的身份與家長聯絡方式，方便之後通報與後續聯繫", correct:false, explain:"這些資訊可以稍後再確認，當下應該優先評估病人的呼吸與意識狀況，分秒必爭。"},
        {text:"立刻打電話通知家長到場，等家長抵達後再開始評估與處置", correct:false, explain:"不應該等待家長到場才開始處置，應立即評估病人並視情況啟動緊急醫療系統。"}
      ]},
    {type:"action", scene:"兒童已被安全帶上岸，平躺在地上，你檢查發現無呼吸也無脈搏，同行的朋友也上前幫忙。",
      prompt:"你應該？",
      cprSim:true,
      correct:{tool:"cpr",target:"chest",explain:"溺水造成的心跳停止多為缺氧性，及早開始CPR、有效通氣非常重要，比例30:2。"},
      mistakes:[]},
    {type:"choice", scene:"你開始CPR。",
      question:"兒童單人施救比例與注意事項？",
      choices:[
        {text:"30:2，按壓深度約胸廓前後徑1/3，若懷疑跳水造成頸部外傷需注意脊椎保護", correct:true, explain:"單人施救兒童CPR比例為30:2，並考慮外傷機轉可能合併脊椎損傷。"},
        {text:"應該採用15:2的按壓通氣比例，這是單人施救兒童時的標準做法", correct:false, explain:"15:2是雙人施救兒童時的比例，單人施救時兒童CPR比例與成人相同，為30:2。"},
        {text:"溺水情況下持續胸部按壓比給予人工呼吸更關鍵，可以省略通氣的步驟", correct:false, explain:"溺水造成的心跳停止多為缺氧性，通氣反而格外重要，不應該省略。"},
        {text:"只要確定是溺水就不用特別考慮脊椎保護，這通常只有車禍才需要注意", correct:false, explain:"若有跳水、滑倒撞擊等機轉，溺水一樣可能合併脊椎損傷，需要注意保護。"}
      ]},
    {type:"action", scene:"施救數分鐘後兒童開始有自發呼吸與咳嗽。",
      prompt:"你應該？",
      correct:{tool:"positionPatient",target:"patient",positionSpec:{position:"recovery"},explain:"維持側躺姿勢保持呼吸道暢通，持續密切監測，溺水病人即使恢復意識也須送醫觀察延遲性肺部併發症。"},
      mistakes:[]}
  ]
});
