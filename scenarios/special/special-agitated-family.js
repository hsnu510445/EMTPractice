SCENARIOS.push({
  id:"special-agitated-family", category:"special", difficulty:2,
  title:"情緒激動的家屬",
  summary:"居家長者疑似中風，家屬情緒失控擋在門口質問你，你要同時安撫家屬又完成正確的評估。",
  steps:[
    {type:"choice", scene:"你抵達一戶公寓，開門的是情緒激動、大聲說話的中年男性，他站在門口擋著不讓你們進去，一直質問「你們終於來了，怎麼這麼慢？我媽剛剛講話講一半突然講不清楚，臉也歪一邊，你們會不會看啊？」",
      question:"他情緒激動、擋在門口，你會怎麼回應？",
      choices:[
        {text:"先簡短表明身份與來意，語氣穩定地說明你們是來幫忙評估的，同時請他讓出空間讓你們靠近病人，之後再詳細說明狀況", correct:true, explain:"在情緒激動的現場，先用穩定、簡短的專業語氣建立信任並取得靠近病人的空間，比在門口對峙更能爭取到評估與處置的時間。"},
        {text:"直接大聲要求他讓開，說再擋著就要叫警察處理，先把人架開再進去評估", correct:false, explain:"用更強硬對立的態度回應激動的家屬，容易讓衝突升高，反而拖慢實際評估病人的時間。"},
        {text:"在門口花時間跟他解釋中風的完整病理機轉，讓他理解狀況嚴重性後再進去評估", correct:false, explain:"中風評估與送醫非常講求時間，花時間在門口做完整的病理解說會延誤真正需要進行的評估。"},
        {text:"先不理會家屬的情緒反應，直接從他身邊擠過去，逕自走向病人開始評估", correct:false, explain:"目標沒有錯，但用推擠的方式經過情緒激動的人，可能引發肢體衝突，不是恰當的處理方式。"}
      ]},
    {type:"action", scene:"家屬讓出空間後，你走近病患，看到一位老太太坐在椅子上，嘴角微微下垂，說話含糊不清。",
      prompt:"建立整體印象，你會？",
      correct:{tool:"generalImpression",target:"patient",
        giRelevant:["head:drooling","patient:distress"],
        giFindings:{
          "head:drooling":"嘴角明顯往一側下垂，說話含糊不清，喝水時水會從嘴角漏出",
          "patient:distress":"看起來自己也很緊張，努力想解釋卻說不清楚"
        },
        explain:"觀察臉部是否對稱、說話是否清晰，這些都是重要的整體印象線索。"},
      mistakes:[]},
    {type:"action", scene:"你懷疑是中風，想做進一步的標準化評估。",
      prompt:"你會使用什麼工具？",
      correct:{tool:"fastStrokeCheck",target:"head",
        reading:"臉部一側明顯下垂(F)、左手略微無力抬不高(A)、說話含糊不清(S)，家屬說症狀大約30分鐘前開始(T)",
        explain:"FAST是中風的快速評估口訣：Face臉部、Arm手臂、Speech言語、Time發作時間，任一項異常都應懷疑中風並記錄確切發作時間，儘速送醫。"},
      mistakes:[]},
    {type:"choice", scene:"家屬這時又插話說：「是不是你們動作太慢？要不要我打電話叫我認識的神經內科醫生來看？」",
      question:"你會怎麼回應？",
      choices:[
        {text:"跟他說明中風的處置非常講求時間，你們會盡快完成評估並協助送到有能力處理中風的醫院，並請他協助確認剛剛症狀開始的確切時間", correct:true, explain:"用清楚、正面的說明取代單純安撫，同時善用家屬能提供的重要資訊（症狀發作時間），對後續醫院的治療判斷很關鍵。"},
        {text:"請他不要再說話，安靜在旁邊等就好，你們會自己處理好", correct:false, explain:"這樣的回應顯得冷淡且沒有善用家屬手上的重要資訊，例如症狀確切開始的時間。"},
        {text:"答應可以先打給他認識的醫生，等醫生電話指示後再決定下一步處置", correct:false, explain:"中風處置分秒必爭，等待非現場的私人醫生電話指示會不必要地延誤標準送醫流程。"},
        {text:"跟他解釋你們也不確定要送哪家醫院，請他自己決定要不要找認識的醫生", correct:false, explain:"這樣的回應顯得猶豫不專業，也沒有依照中風病人應送往具備處理能力醫院的原則行動。"}
      ]},
    {type:"action", scene:"你決定準備送醫，病患意識清楚、生命徵象穩定。",
      prompt:"你會協助她採取什麼姿勢？",
      correct:{tool:"positionPatient",target:"patient",positionSpec:{position:"semiFowler"},explain:"意識清楚、生命徵象穩定的疑似中風病人，可採半坐臥等舒適姿勢搬運，並持續監測意識與生命徵象變化。"},
      mistakes:[]},
    {type:"action", scene:"準備出發前往醫院。",
      prompt:"交班時你會特別說明什麼？",
      correct:{tool:"handoverReport",target:"scene",explain:"交班時要清楚說明FAST評估結果，以及最重要的「最後確認正常的時間」（症狀發作時間），這對醫院決定是否能使用某些急性治療非常關鍵。"},
      mistakes:[]}
  ]
});
