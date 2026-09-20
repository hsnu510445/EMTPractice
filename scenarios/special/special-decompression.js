SCENARIOS.push({
  id:"special-decompression", category:"special", difficulty:3,
  title:"潛水後不對勁的年輕人",
  summary:"綠島潛水行程結束後，一名潛水客陸續出現關節痛與暈眩，這不是普通的累。",
  steps:[
    {type:"choice", scene:"一群人結束潛水行程上岸，其中一名潛水客表示浮上水面時因為緊急狀況上升得比較快，現在覺得肩膀和膝蓋關節痠痛、有點頭暈，皮膚有點刺刺癢癢的感覺。",
      question:"潛水後合併這些症狀，你會怎麼看待？",
      choices:[
        {text:"潛水快速上升合併關節痛、頭暈、皮膚異常感覺，須高度懷疑減壓病（潛水夫病），不是單純潛水後的疲勞痠痛", correct:true, explain:"快速上浮會讓體內溶解的氮氣來不及排出而形成氣泡，可能影響關節、神經系統、皮膚等多處組織，關節痛、頭暈、皮膚異常感覺都是減壓病的常見表現。"},
        {text:"這應該是潛水體力消耗過大造成的疲勞痠痛，上岸休息一段時間就會緩解", correct:false, explain:"合併快速上浮的病史與關節痛、頭暈、皮膚異常等多處症狀，不應輕視為單純的疲勞痠痛。"},
        {text:"皮膚刺癢跟關節痠痛可能是水溫較低造成的正常生理反應，屬於常見現象", correct:false, explain:"這些症狀合併快速上浮的病史更符合減壓病的表現，不應歸因於單純的水溫因素。"},
        {text:"只要確定人已經平安上岸、離開水面，這些不適感通常不用特別處理", correct:false, explain:"減壓病是需要積極處置（如高濃度給氧）並儘速送往具備高壓氧治療能力院所的狀況，不能只因為人已上岸就不處理。"}
      ]},
    {type:"action", scene:"你決定進一步評估他。",
      prompt:"你會先？",
      correct:{tool:"generalImpression",target:"patient",
        giRelevant:["patient:skinColor","patient:distress","patient:sceneClue"],
        giFindings:{
          "patient:skinColor":"皮膚有些微刺癢、斑駁的感覺，膚色大致正常",
          "patient:distress":"訴說關節痠痛與暈眩，看起來不太舒服",
          "patient:sceneClue":"潛水裝備還沒完全卸下，同伴提到他上升過程比較倉促"
        },
        explain:"建立整體印象，觀察意識程度、皮膚外觀與整體活動能力，同時詢問詳細的潛水深度與上升過程。"},
      mistakes:[]},
    {type:"action", scene:"你評估後決定給予處置。",
      prompt:"現場處置你會優先給予？",
      correct:{tool:"oxygenMask",target:"head",
        oxygenSpec:{device:"nonRebreather", flowMin:10, flowMax:15},
        explain:"高濃度氧氣是懷疑減壓病病人現場最重要的處置，有助於加速體內氮氣排出、減少氣泡造成的組織傷害。"},
      mistakes:[]},
    {type:"action", scene:"給氧後。",
      prompt:"你會協助他採取什麼姿勢，並注意什麼？",
      correct:{tool:"positionPatient",target:"patient",positionSpec:{position:"supineNeutral"},explain:"讓病人平躺休息，避免不必要的活動與再次潛水，儘速安排送往具備高壓氧艙（再加壓治療）能力的醫療院所。"},
      mistakes:[]},
    {type:"choice", scene:"同行的朋友建議「聽說潛回水裡再慢慢上來可以緩解症狀」，想帶他再下水一次。",
      question:"你會怎麼回應這個建議？",
      choices:[
        {text:"絕對不建議在沒有專業水下再加壓治療設備與人員的情況下再次下水，這樣做風險極高，正確做法是儘速將他送往有高壓氧艙的醫療院所", correct:true, explain:"非專業條件下的「水下再加壓」風險極高（缺氧、失溫、二次意外等），現場正確處置是給氧、休息、儘速送醫，而不是嘗試民間偏方式的重新下潛。"},
        {text:"這是民間流傳已久的做法，聽起來有一定道理，可以讓他們試試看", correct:false, explain:"非專業條件下的水下再加壓風險極高，不應該因為是流傳已久的做法就採信並嘗試。"},
        {text:"只要有同伴陪同下水，過程中彼此照應，這樣做基本上不會有風險", correct:false, explain:"在缺乏專業設備與醫療監控的情況下，再次下水風險非常高，同伴陪同無法降低這個風險。"},
        {text:"這是他們自己的決定，身為救護人員不方便介入朋友之間的討論", correct:false, explain:"身為現場處置者，應該明確給予正確的醫療建議並勸阻這種危險行為，而不是保持中立不介入。"}
      ]}
  ]
});
