SCENARIOS.push({
  id:"special-childbirth", category:"special", difficulty:3,
  title:"電話裡陣痛越來越密集的孕婦",
  summary:"39週孕婦陣痛加劇，你要判斷還有沒有時間送醫，還是得就地準備。",
  steps:[
    {type:"choice", scene:"一位孕婦打電話說她已經懷孕39週，肚子陣痛越來越密集，她覺得寶寶好像要出來了。",
      question:"電話中你會優先確認什麼，來判斷有沒有時間送到醫院？",
      choices:[
        {text:"這是第幾胎、陣痛間隔多久、是否有強烈便意感或感覺到胎頭下降想用力", correct:true, explain:"經產婦（已生過小孩）產程通常較快，陣痛間隔短、合併強烈便意感/想用力，都提示可能沒有足夠時間送醫，需要就地準備接生。"},
        {text:"先確認她的姓名和住址，方便派遣救護車與後續病歷建檔", correct:false, explain:"這些基本資訊當然需要，但無法幫你判斷產程進展到哪個階段、送醫時間是否還足夠。"},
        {text:"請她自己或請家人開車直接送到醫院，這樣通常會比等待救護車更快", correct:false, explain:"產程可能已經非常接近生產，貿然要求自行前往可能來不及，需要先評估產程進展再決定。"},
        {text:"電話中先不用問太多，等救護車抵達現場後再實際評估比較準確", correct:false, explain:"電話中先詢問這些關鍵資訊，能幫助出勤人員提前判斷嚴重度並做好準備，不應該等到現場才問。"}
      ]},
    {type:"action", scene:"抵達現場，她說這是第二胎，陣痛間隔大約2分鐘一次，且有強烈的便意感和想用力的感覺。",
      prompt:"你會先？",
      correct:{tool:"generalImpression",target:"patient",
        giRelevant:["patient:distress","abdomen:contraction"],
        giFindings:{
          "patient:distress":"陣痛時明顯用力、表情痛苦，間隔感覺越來越密集",
          "abdomen:contraction":"陣痛頻繁且強烈，合併強烈便意感"
        },
        explain:"第二胎、陣痛間隔短、合併便意感，都是產程進展快速的警訊，需儘快評估是否已經可以看到胎頭（crowning）。"},
      mistakes:[]},
    {type:"choice", scene:"評估後你發現會陰部已經可以看到胎頭。",
      question:"這代表？",
      choices:[
        {text:"胎頭已經crowning，代表分娩即將發生，沒有時間送醫，應就地準備接生", correct:true, explain:"一旦看到胎頭，分娩通常在數分鐘內發生，這時嘗試搬運或送醫反而更危險，應就地準備接生。"},
        {text:"還有機會把她移到擔架上、快速送往最近的醫院處理", correct:false, explain:"胎頭已經可見時通常已經沒有足夠時間安全搬運送醫，嘗試移動反而更危險，應就地準備接生。"},
        {text:"這是產程進展中的正常現象，先讓她繼續用力，暫時不用特別準備", correct:false, explain:"這是分娩即將發生的明確徵象，需要立即準備接生用品與相關處置，而不是暫時不作為。"},
        {text:"應該試著用手稍微把胎頭推回去，延緩生產爭取送醫時間", correct:false, explain:"絕對不可嘗試阻止或推回胎頭，這樣做非常危險，可能同時傷害母親與胎兒。"}
      ]},
    {type:"action", scene:"你決定就地準備接生。",
      prompt:"接觸產程前你會？",
      correct:{tool:"gloves",target:"self",explain:"接生過程會接觸大量體液，標準防護措施是必要的第一步。"},
      mistakes:[]},
    {type:"action", scene:"防護完成，你協助她準備分娩。",
      prompt:"你會協助她？",
      correct:{tool:"positionPatient",target:"patient",positionSpec:{position:"sittingUpright"},explain:"協助母親採取適合分娩的姿勢，並在胎頭娩出時給予適當支撐，避免用力拉扯。"},
      mistakes:[]},
    {type:"action", scene:"寶寶已經出生，發出哭聲。",
      prompt:"你現在最優先要做什麼？",
      correct:{tool:"blanket",target:"patient",explain:"新生兒體表面積大、容易快速失溫，出生後應立即擦乾並保暖包裹，除非有需要優先處理的呼吸道或哭聲/活動力異常。"},
      mistakes:[]},
    {type:"action", scene:"寶寶已經保暖包好。",
      prompt:"接下來你應該？",
      correct:{tool:"ongoingMonitor",target:"patient",explain:"分娩後仍須同時監測母親（子宮收縮情況、出血量）與新生兒（呼吸、活動力、膚色），兩位都是你的病人，應儘速一起送醫。"},
      mistakes:[]}
  ]
});
