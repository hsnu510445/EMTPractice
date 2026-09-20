SCENARIOS.push({
  id:"bls-infant-choking", category:"bls", difficulty:2,
  title:"嬰兒異物哽塞",
  summary:"6個月大嬰兒異物哽塞，練習背部拍打/胸部按壓與轉換CPR的判斷。",
  steps:[
    {type:"choice", scene:"家長抱著約6個月大嬰兒衝進來，說嬰兒吃東西時突然咳不出來，臉開始發紫，但還有微弱哭聲/咳嗽聲。",
      question:"嬰兒還能咳嗽發出聲音，代表？你應該怎麼做？",
      choices:[
        {text:"呼吸道尚未完全阻塞，此時應鼓勵咳嗽，不要貿然介入拍背，密切觀察", correct:true, explain:"能咳嗽、發出聲音表示氣道尚未完全阻塞，過度介入可能使異物移位更深，應先密切觀察。"},
        {text:"這樣的狀況已經算是完全阻塞了，應該馬上開始背部拍打與胸部按壓", correct:false, explain:"能咳嗽、發出聲音代表氣道尚未完全阻塞，此時貿然拍背可能讓異物移位更深，應先觀察。"},
        {text:"應該把嬰兒倒提起來用力甩動，讓異物藉由重力自然掉出來", correct:false, explain:"這是危險且不建議的做法，可能造成嬰兒其他傷害，不是正確的哽塞處置方式。"},
        {text:"嬰兒出現臉色發紫的狀況，不管有沒有反應都應該馬上開始CPR", correct:false, explain:"嬰兒目前意識清楚且能咳嗽發聲，不需要CPR，應先觀察是否能自行咳出異物。"}
      ]},
    {type:"action", scene:"數秒後嬰兒突然安靜下來，無法咳出聲音、無法哭，出現吸氣時胸凹徵象，臉色發紫加重，這代表呼吸道完全阻塞。",
      prompt:"你應該？",
      correct:{tool:"backBlowsChestThrusts",target:"chest",explain:"嬰兒完全氣道阻塞的標準處置為5次背部拍打與5次胸部按壓交替執行（嬰兒不建議腹部戳擊法）。"},
      mistakes:[]},
    {type:"action", scene:"你執行背部拍打與胸部按壓交替，嬰兒突然變得沒有反應。",
      prompt:"嬰兒失去反應後，你應該？",
      correct:{tool:"cpr",target:"chest",explain:"失去反應後應立即轉為CPR流程，每次通氣前檢查口腔但不盲目掏挖異物。"},
      mistakes:[]},
    {type:"choice", scene:"你持續嬰兒CPR。",
      question:"嬰兒CPR的按壓/通氣比例（單人施救者）與按壓手法？",
      choices:[
        {text:"30:2，使用兩指或雙手環抱雙指按壓胸骨下半部，深度約4公分", correct:true, explain:"單人施救嬰兒CPR比例為30:2，按壓手法為兩指法或環抱雙指法。"},
        {text:"應該採用15:2的按壓通氣比例，並用雙手掌根交疊按壓", correct:false, explain:"15:2是雙人施救時的比例，單人施救嬰兒的比例與成人、兒童相同，都是30:2。"},
        {text:"比例一樣是30:2，但應該用整個手掌像對成人一樣用力按壓", correct:false, explain:"嬰兒體型小，應使用兩指法或環抱雙指法，用整個手掌施力容易造成過度損傷。"},
        {text:"嬰兒的心跳停止通常是缺氧造成，所以只要持續按壓、不用給予通氣", correct:false, explain:"單人施救的嬰兒CPR仍須包含通氣，且嬰兒心跳停止多為缺氧性，通氣格外重要。"}
      ]}
  ]
});
