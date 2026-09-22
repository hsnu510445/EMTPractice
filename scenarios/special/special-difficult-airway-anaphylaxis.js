SCENARIOS.push({
  id:"special-difficult-airway-anaphylaxis", category:"special", difficulty:5,
  title:"呼吸道快速腫脹、難以維持的過敏患者",
  summary:"過敏性休克合併呼吸道快速腫脹，病患體型與構造讓呼吸道處置格外困難，練習在呼吸道即將完全阻塞前把握關鍵處置時機。",
  steps:[
    {type:"action", scene:"一名體型較大、頸部較短的中年男性誤食含堅果成分的食物後，出現嘴唇與舌頭腫脹，聲音變得沙啞，呼吸開始出現喘鳴聲。",
      prompt:"你會先做什麼？",
      correct:{tool:"generalImpression",target:"patient",
        giRelevant:["head:drooling","patient:distress"],
        giFindings:{
          "head:drooling":"嘴唇與舌頭明顯腫脹，口水不斷流出，吞嚥有困難",
          "patient:distress":"聲音沙啞、呼吸有喘鳴聲，看起來很焦慮"
        },
        explain:"建立整體印象，聲音改變合併舌頭腫脹，是呼吸道即將受到嚴重影響的重要警訊。"},
      mistakes:[]},
    {type:"choice", scene:"你注意到他的呼吸道腫脹速度似乎比一般過敏反應更快，聲音越來越沙啞。",
      question:"這個情況為什麼特別需要爭取時間、儘快處置？",
      choices:[
        {text:"呼吸道腫脹是進行性的，一旦完全阻塞現場處置方式非常有限，加上這位病患體型與頸部構造更難處置，必須把握關鍵時間積極處理", correct:true, explain:"呼吸道腫脹惡化的速度與病患自身的構造因素（體型、頸部長度）都會影響處置的難易度，早期積極介入比等到呼吸道完全阻塞後再處理容易得多。"},
        {text:"聲音沙啞只是喉嚨不舒服的正常反應，不代表呼吸道有立即阻塞風險，可以先觀察", correct:false, explain:"聲音沙啞合併舌頭腫脹，是呼吸道腫脹惡化的重要警訊，不應該只當作一般喉嚨不適處理。"},
        {text:"病患體型較大，代表他的呼吸道空間本來就比較充裕，可以慢慢處置沒關係", correct:false, explain:"體型與頸部構造反而可能讓呼吸道處置更加困難，不代表有更多緩衝時間。"},
        {text:"只要病患現在還能自己呼吸、還能發出聲音，就代表沒有立即的危險", correct:false, explain:"還能發出聲音不代表呼吸道沒有持續惡化中的風險，腫脹可能在短時間內快速進展到完全阻塞。"}
      ]},
    {type:"action", scene:"你決定立即使用他的腎上腺素自動注射筆。",
      prompt:"你會怎麼做？",
      correct:{tool:"epiPenAssist",target:"leftLeg",altTargets:["rightLeg"],explain:"腎上腺素是治療過敏性休克、對抗呼吸道腫脹最有效的第一線藥物，應立即協助使用，不要因為猶豫而延誤。"},
      mistakes:[]},
    {type:"action", scene:"打完腎上腺素後，呼吸道腫脹沒有立即消退，喘鳴聲依然明顯。",
      prompt:"你會給予？",
      correct:{tool:"oxygenMask",target:"head",
        oxygenSpec:{device:"nonRebreather", flowMin:10, flowMax:15},
        explain:"在等待腎上腺素發揮效果的同時，先給予高濃度氧氣支持，維持血氧。"},
      mistakes:[]},
    {type:"choice", scene:"同伴問你「如果等一下他呼吸道完全腫到塞住，我們現場有辦法處理嗎？」",
      question:"你會怎麼回答？",
      choices:[
        {text:"如果完全阻塞，現場基礎救護能提供的處置非常有限，這正是為什麼要把握尚未完全阻塞前積極處置並儘速送醫的原因", correct:true, explain:"誠實面對現場處置能力的限制，是正確評估風險、做出正確優先順序判斷的基礎，這也凸顯及早處置與快速送醫的重要性。"},
        {text:"不用擔心，現場一定有辦法透過其他工具打通完全阻塞的呼吸道", correct:false, explain:"這樣的說法過度樂觀，可能讓團隊低估風險、延誤送醫的急迫性。"},
        {text:"如果真的完全阻塞，代表已經沒有辦法處理，準備交班說明即可", correct:false, explain:"這樣的態度過於消極，現階段仍應積極處置並儘速送醫爭取時間，而不是提前放棄。"},
        {text:"這個問題不需要現在討論，等真的發生再臨場反應就好", correct:false, explain:"提前討論並理解處置能力的限制，有助於團隊做出正確的優先順序判斷與加速決策，不應該完全不預先考慮。"}
      ]},
    {type:"action", scene:"你決定儘速準備送醫。",
      prompt:"你會協助他採取什麼姿勢？",
      correct:{tool:"positionPatient",target:"patient",positionSpec:{position:"sittingUpright"},
        explain:"呼吸道腫脹的病患通常坐姿比平躺更容易呼吸，讓他採取自己覺得最舒服、最容易呼吸的坐姿。"},
      mistakes:[]},
    {type:"action", scene:"準備出發，途中你會？",
      prompt:"你應該持續做什麼？",
      correct:{tool:"ongoingMonitor",target:"patient",
        explain:"持續密切監測呼吸道狀況、聲音變化與血氧，一旦出現惡化徵象要立即回報並做好因應準備。"},
      mistakes:[]},
    {type:"action", scene:"抵達醫院前。",
      prompt:"交班時你會特別說明什麼？",
      correct:{tool:"handoverReport",target:"scene",
        explain:"交班時要說明過敏原、腎上腺素給予的時間、呼吸道腫脹惡化的速度與現況，讓醫院能提前準備因應可能的困難呼吸道處置。"},
      mistakes:[]}
  ]
});
