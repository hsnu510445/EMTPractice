SCENARIOS.push({
  id:"special-altitude-sickness", category:"special", difficulty:2,
  title:"合歡山上走不穩的遊客",
  summary:"遊客快速搭車上到3000多公尺的高山，開始頭痛想吐，走路還有點歪歪的。",
  steps:[
    {type:"choice", scene:"一群遊客搭車直接上到合歡山（海拔3000多公尺），其中一位表示頭痛、噁心想吐、全身無力，你注意到他走路東倒西歪，步伐不太穩。",
      question:"快速抵達高海拔後出現這些症狀，你會怎麼判斷？",
      choices:[
        {text:"頭痛合併噁心、無力是典型的高山症（急性高山病）表現；而「走路不穩」是更嚴重的警訊，須高度懷疑惡化為高海拔腦水腫，需要積極處理", correct:true, explain:"快速上升到高海拔、頭痛合併其他症狀是典型高山症；步態不穩（運動失調）是高海拔腦水腫（HACE）的重要警訊，代表病情可能快速惡化，需要積極處置。"},
        {text:"這些症狀比較像是搭車上山路途顛簸加上體力消耗造成的疲勞，休息片刻應該就能緩解", correct:false, explain:"走路不穩是重要的神經學警訊，合併頭痛噁心不應只當作單純疲勞看待。"},
        {text:"高山症雖然常見但通常症狀輕微、會自然緩解，現場不需要特別積極處理", correct:false, explain:"高山症若惡化為腦水腫或肺水腫可能危及生命，出現步態不穩這類警訊時需要積極處理。"},
        {text:"頭痛跟噁心比較像是路途中著涼引發的感冒症狀，跟海拔高度關係不大", correct:false, explain:"快速上升到高海拔後出現的頭痛合併其他症狀，應優先考慮與高度相關，而不是先歸因於感冒。"}
      ]},
    {type:"action", scene:"你決定進一步評估他。",
      prompt:"你會先？",
      correct:{tool:"verbalCheck",target:"patient",explain:"評估意識程度與對答是否清楚，步態不穩合併意識改變會讓你更加警覺病情惡化的可能。"},
      mistakes:[]},
    {type:"choice", scene:"他意識還算清楚，但走路仍然不穩，同行的人問「要不要先在這裡休息、吃個高山症的藥就好？」",
      question:"對於惡化中的高山症，現場最重要、最有效的處置是什麼？",
      choices:[
        {text:"儘快協助他下降到較低海拔，下降高度是治療高山症最重要且最有效的方式，比任何藥物或器材都優先", correct:true, explain:"下降高度能直接改善組織缺氧的根本原因，是高山症（尤其出現腦水腫警訊時）最重要的處置，藥物與氧氣是輔助，不能取代下降高度。"},
        {text:"先在原地紮營休息、讓他多補充水分，觀察症狀是否隨時間慢慢緩解", correct:false, explain:"出現運動失調這類警訊時，留在原高度可能持續惡化，下降高度才是最關鍵的處置，不應只是原地觀察。"},
        {text:"吃了高山症藥物之後如果覺得比較舒服，就可以評估繼續往更高的地方前進", correct:false, explain:"出現惡化警訊時不應該繼續上升，藥物只能輔助緩解症狀，無法取代下降高度的根本處置。"},
        {text:"這個時間點讓他好好睡一覺、恢復體力，通常隔天起來就會明顯改善", correct:false, explain:"出現運動失調等惡化警訊時不應被動等待恢復，需要積極處置並儘快協助下降高度。"}
      ]},
    {type:"action", scene:"你們開始協助他下降的同時。",
      prompt:"你會考慮給予？",
      correct:{tool:"oxygenMask",target:"head",
        oxygenSpec:{device:"simpleMask", flowMin:6, flowMax:10},
        explain:"補充氧氣可以在下降過程中輔助改善症狀，但不能取代下降高度這個根本處置。"},
      mistakes:[]},
    {type:"action", scene:"給氧並協助下降途中。",
      prompt:"你會協助他採取什麼姿勢？",
      correct:{tool:"positionPatient",target:"patient",positionSpec:{position:"semiFowler"},explain:"若有呼吸費力的情形，半坐臥姿勢較有利於呼吸，應避免完全平躺，同時持續監測意識與步態是否持續惡化。"},
      mistakes:[]}
  ]
});
