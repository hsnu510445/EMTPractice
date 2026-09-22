SCENARIOS.push({
  id:"trauma-obvious-death-signs", category:"trauma", difficulty:5,
  title:"車禍現場：要不要開始急救的判斷",
  summary:"車禍傷患明顯沒有生命跡象，練習辨識「明確死亡徵象」與一般心跳停止的差別，這個判斷會直接決定要不要開始急救。",
  steps:[
    {type:"action", scene:"轎車高速撞擊安全島後翻覆，一名傷患被拋出車外倒在路面，你到達時他完全沒有動靜。",
      prompt:"你會先做什麼？",
      correct:{tool:"sceneCheck",target:"scene",explain:"確認車流已管制、現場沒有持續性危險，才能安全接近評估。"},
      mistakes:[]},
    {type:"action", scene:"確認安全後，你靠近他。",
      prompt:"你會先做什麼？",
      correct:{tool:"generalImpression",target:"patient",
        giRelevant:["patient:posture","head:scalp"],
        giFindings:{
          "patient:posture":"身體呈現明顯不自然、不符合正常關節活動範圍的姿勢",
          "head:scalp":"頭部有大範圍的嚴重損傷"
        },
        explain:"建立整體印象時，觀察傷勢的嚴重程度與型態，這會影響你接下來要不要開始急救的判斷。"},
      mistakes:[]},
    {type:"choice", scene:"同伴看到傷勢後說「這麼嚴重應該救不回來了吧，還要開始CPR嗎？」",
      question:"你會怎麼判斷是否開始急救？",
      choices:[
        {text:"除非現場出現明確死亡徵象（如與生命不相容的身體毀損、屍僵、屍斑），否則不應僅憑「看起來很嚴重」放棄急救，仍應確認呼吸脈搏後開始CPR", correct:true, explain:"傷勢看起來嚴重不等於符合明確死亡徵象的判斷標準，這是兩個不同的概念，救護人員不應該用主觀的「感覺救不回來」取代明確的判斷標準。"},
        {text:"只要傷勢用肉眼看起來很嚴重，就可以直接判斷急救沒有意義不用再確認", correct:false, explain:"傷勢嚴重的主觀印象不等於明確死亡徵象，不能用這個理由跳過確認呼吸脈搏的步驟。"},
        {text:"車禍拋出傷患只要有明顯外傷，就一律不用嘗試急救，等警方到場處理", correct:false, explain:"這樣的一概而論並不正確，仍需要依照明確的評估標準來判斷，而不是憑外傷嚴重程度直接放棄。"},
        {text:"為了避免爭議，無論如何都要急救到送達醫院，出現明確死亡徵象也要繼續", correct:false, explain:"雖然原則上應積極急救，但當現場已出現明確、無庸置疑的死亡徵象時，勉強持續不必要的急救動作並不恰當，重點在於用正確標準判斷，而不是完全不做判斷。"}
      ]},
    {type:"action", scene:"你決定依標準流程確認。",
      prompt:"你會先確認什麼？",
      correct:{tool:"pulseCheck",target:"neck",
        reading:"觸診10秒以上，沒有觸得到脈搏，胸廓完全沒有起伏",
        explain:"無論外觀傷勢看起來如何，都應該依標準流程確實確認呼吸與脈搏，這是判斷是否開始急救的必要步驟。"},
      mistakes:[]},
    {type:"choice", scene:"確認沒有呼吸脈搏後，你進一步觀察，沒有發現屍僵、屍斑，也沒有與生命不相容的身體大範圍毀損（例如斷頭），只是有嚴重外傷。",
      question:"這樣的觀察結果，你會怎麼決定？",
      choices:[
        {text:"沒有觀察到明確死亡徵象，即使外傷嚴重，仍應立即開始CPR並使用AED，準備儘速送醫", correct:true, explain:"沒有明確死亡徵象時，應該給予急救的機會，這是保守但正確的判斷方向，不應該讓外觀嚴重度的主觀感受取代明確的評估標準。"},
        {text:"嚴重外傷合併沒有呼吸脈搏，就已經足夠判定不需要開始急救，不用再考慮其他因素", correct:false, explain:"嚴重外傷合併沒有呼吸脈搏仍然屬於「應該開始急救」的情況，除非合併明確死亡徵象才考慮不開始。"},
        {text:"先花時間仔細檢查全身，確認到底有沒有機會存活，再決定要不要開始CPR", correct:false, explain:"沒有明確死亡徵象時不應該延遲開始CPR去做額外的存活機會評估，應立即開始急救。"},
        {text:"讓同伴自行決定要不要開始急救，這種生死判斷應該交給現場人員各自的直覺", correct:false, explain:"這類判斷應該依循明確、客觀的標準，而不是交由個人主觀直覺各自決定。"}
      ]},
    {type:"action", scene:"你決定立即開始急救。",
      prompt:"開始完整的CPR流程（含AED）",
      cprSim:true,
      correct:{tool:"cpr",target:"chest",explain:"沒有明確死亡徵象時，應立即開始CPR並儘速使用AED，外傷性心跳停止的處置原則與一般心跳停止類似，仍應積極急救並儘速送醫。"},
      mistakes:[]},
    {type:"action", scene:"急救進行中，準備送醫。",
      prompt:"接下來你應該？",
      correct:{tool:"ongoingMonitor",target:"patient",
        explain:"持續監測急救反應，並儘速送醫由醫院團隊接手後續判斷。"},
      mistakes:[]},
    {type:"action", scene:"抵達醫院前。",
      prompt:"交班時你會特別說明什麼？",
      correct:{tool:"handoverReport",target:"scene",
        explain:"交班時要說明受傷機轉、發現時的狀態與確認結果、急救開始的時間與過程，這些資訊對醫院後續判斷非常重要。"},
      mistakes:[]}
  ]
});
