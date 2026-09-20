SCENARIOS.push({
  id:"special-heat", category:"special", difficulty:1,
  title:"工地熱衰竭與中暑",
  summary:"高溫環境下的兩名工人案例，練習區分熱衰竭與中暑並選擇正確處置。",
  steps:[
    {type:"action", scene:"大熱天工地一名工人感覺頭暈、噁心、大量出汗，被同事扶到陰涼處，意識清楚。",
      prompt:"你先做什麼？",
      correct:{tool:"thermometer",target:"patient",
        reading:"38.3°C；意識清楚，能正確對答",
        explain:"體溫是區分熱衰竭與中暑的重要客觀依據，應盡早測量。"},
      mistakes:[]},
    {type:"action", scene:"測得體溫後。",
      prompt:"你的初步處置？",
      correct:{tool:"coolActive",target:"patient",
        explain:"移到更涼爽通風處，脫除多餘衣物，噴水搧風降溫（非冰塊直接大面積敷用），意識清楚且無嘔吐可小口補充水分/電解質。"},
      mistakes:[]},
    {type:"choice", scene:"你評估他生命徵象大致穩定。",
      question:"剛才測到體溫38.3°C、意識清楚，如果隔壁還有一位意識混亂、皮膚乾熱、幾乎不出汗的工人，兩者處置上最關鍵的差異是？",
      choices:[
        {text:"意識改變合併體溫顯著升高（中暑）屬於立即威脅生命的醫療急症；意識清楚、體溫較低者（熱衰竭）可先降溫並小口補水", correct:true, explain:"意識狀態與體溫數值是區分熱衰竭與中暑的重要臨床依據，中暑屬於醫療急症，優先積極降溫並儘速送醫。"},
        {text:"兩人都是在大熱天工作後不舒服，處置方式應該大致相同，都先移到陰涼處補充水分即可", correct:false, explain:"熱衰竭與中暑的嚴重度與處置優先度不同，中暑屬於醫療急症，需要更積極的降溫與送醫，不能用同一套方式處理。"},
        {text:"皮膚乾熱、幾乎不出汗代表身體已經在自然散熱降溫，體溫較高的這位反而不需要太緊張", correct:false, explain:"體溫顯著升高合併意識改變、皮膗乾熱少汗，其實是中暑病情更嚴重的警訊，而不是身體正在自行改善。"},
        {text:"只要用體溫計確認數字夠高，就可以直接判斷為中暑，不需要額外評估他的意識反應", correct:false, explain:"意識狀態同樣是區分熱衰竭與中暑的重要臨床依據，不能只憑體溫數字判斷，仍需一併評估意識反應。"}
      ]},
    {type:"action", scene:"你轉往評估那位意識混亂、皮膚乾熱、幾乎沒有出汗的工人。",
      prompt:"你會先確認什麼？",
      correct:{tool:"thermometer",target:"patient",
        reading:"40.6°C；意識混亂，無法正確對答",
        explain:"合併意識混亂時更需要客觀的體溫數據，協助判斷是否為中暑。"},
      mistakes:[]},
    {type:"action", scene:"測得體溫後，這是疑似中暑。",
      prompt:"你該做什麼？",
      correct:{tool:"coolActive",target:"patient",
        explain:"意識混亂與皮膚乾熱是中暑的警訊，屬於醫療急症，應立即積極降溫並儘速送醫，同時評估ABC，不建議此時經口給予水分。"},
      mistakes:[]}
  ]
});
