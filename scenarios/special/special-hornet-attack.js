SCENARIOS.push({
  id:"special-hornet-attack", category:"special", difficulty:3,
  title:"山徑上的虎頭蜂群攻擊",
  summary:"登山客不小心驚擾虎頭蜂窩，被群蜂圍攻多處螫傷，這跟單一蜂螫的處理不太一樣。",
  steps:[
    {type:"action", scene:"你接獲通報，一名登山客在山徑上不小心驚擾了虎頭蜂窩，被一群蜂追著螫，同行的人合力把他帶離現場約50公尺，他全身多處有螫傷痕跡。",
      prompt:"抵達現場後第一步？",
      correct:{tool:"sceneCheck",target:"scene",explain:"虎頭蜂窩被驚擾後蜂群可能仍在附近具攻擊性，必須先確認你與傷患目前所在位置是否已經遠離蜂巢範圍，避免自己也被群蜂攻擊，必要時再往更遠處移動。"},
      mistakes:[{tool:"generalImpression",target:"patient",explain:"若蜂群仍在附近具攻擊性，貿然靠近評估傷患可能讓你自己也被螫傷，須先確保雙方都在安全距離外。"}]},
    {type:"choice", scene:"確認已遠離蜂巢範圍，你看到他身上、頭皮、手臂多達20幾處螫傷痕跡，他表示劇痛，但沒有蜂螫過敏病史。",
      question:"他沒有已知的蜂螫過敏史，但被螫了20幾處，這代表沒有危險嗎？",
      choices:[
        {text:"即使沒有過敏史，大量螫傷本身注入的毒素量（毒性負荷）就可能造成全身性中毒反應，甚至影響腎臟等器官，仍屬於需要積極處置與送醫的緊急狀況", correct:true, explain:"多處螫傷的風險不只來自過敏反應，大量蜂毒本身的直接毒性（可能造成溶血、橫紋肌溶解、腎損傷等）在缺乏過敏的情況下依然存在，螫傷數量本身就是嚴重度的重要指標。"},
        {text:"沒有過敏病史代表身體對蜂毒的耐受性比較好，這麼多處螫傷應該不會有太大的危險", correct:false, explain:"大量螫傷的毒素負荷本身就有風險，會不會過敏是另一回事，兩者要分開評估，不能因為沒過敏史就放心。"},
        {text:"目前呼吸還算順暢、沒有明顯的呼吸困難，這種情況通常在現場處理完就不用送醫", correct:false, explain:"多處螫傷可能有延遲出現的全身性反應，即使目前呼吸順暢，仍建議送醫做進一步評估與觀察。"},
        {text:"民間常說螫傷處塗牙膏可以中和蜂毒、緩解疼痛，可以先這樣處理看看效果", correct:false, explain:"塗牙膏不是建議的處置方式，可能延誤正確的評估與處置時機，應以正規急救原則處理。"}
      ]},
    {type:"action", scene:"你決定進一步處置。",
      prompt:"你會做什麼？",
      correct:{tool:"removeClothingJewelry",target:"chest",explain:"檢查並移除可能殘留的螫針（用刮除而非擠壓的方式，減少毒液擠入），並移除戒指、手錶等可能因後續腫脹造成壓迫的物品。"},
      mistakes:[]},
    {type:"action", scene:"處理完螫針與隨身物品後。",
      prompt:"接下來你應該？",
      correct:{tool:"ongoingMonitor",target:"patient",explain:"持續監測是否出現全身性過敏反應徵象（呼吸困難、全身紅疹、血壓下降），以及大量毒素可能造成的其他全身性症狀，並儘速送醫。"},
      mistakes:[]}
  ]
});
