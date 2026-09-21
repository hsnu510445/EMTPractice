SCENARIOS.push({
  id:"special-vertigo", category:"special", difficulty:2,
  title:"起床後天旋地轉的阿姨",
  summary:"早上起床後突然天旋地轉合併嘔吐，練習分辨良性頭暈與需要提高警覺的中樞性原因。",
  steps:[
    {type:"action", scene:"你到達時，一名55歲女性躺在床上不敢動，說早上一起身房間就開始天旋地轉，吐了兩次。",
      prompt:"你會先做什麼？",
      correct:{tool:"generalImpression",target:"patient",
        giRelevant:["patient:distress","patient:posture"],
        giFindings:{
          "patient:distress":"表情不適、緊閉雙眼不敢張開，動一下頭就想吐",
          "patient:posture":"儘量保持頭部不動、蜷縮在床上"
        },
        explain:"觀察她的整體反應，頭暈患者常會盡量避免移動頭部來減少不適。"},
      mistakes:[]},
    {type:"action", scene:"你想先評估她的意識與言語狀況，排除比較危險的原因。",
      prompt:"你會使用什麼工具？",
      correct:{tool:"fastStrokeCheck",target:"head",
        reading:"雙側臉部對稱、雙手上舉力量對稱、說話清晰，沒有異常",
        explain:"頭暈合併嘔吐時，快速排除臉部、肢體與言語的異常，有助於判斷是否需要優先考慮中樞神經系統的問題。"},
      mistakes:[]},
    {type:"choice", scene:"FAST評估沒有異常，她說暈眩感在轉頭或翻身時特別明顯，閉眼不動時比較舒服。",
      question:"這樣的表現，你會怎麼判斷？",
      choices:[
        {text:"雖然FAST評估正常、頭暈與特定頭部動作有關，比較像良性陣發性姿勢性眩暈等內耳原因，但仍應完整評估並送醫確認，不能只憑當下感覺就完全排除其他可能", correct:true, explain:"與頭部動作相關、閉眼不動會緩解的頭暈，比較符合內耳前庭系統的問題，但現場仍無法百分之百排除中樞性原因，完整評估與送醫確認仍然重要。"},
        {text:"FAST評估正常就可以百分之百排除中風等嚴重問題，不需要再進一步評估或送醫", correct:false, explain:"FAST評估正常能降低疑慮，但無法百分之百排除所有中樞神經系統的問題，仍需要完整評估。"},
        {text:"頭暈合併嘔吐一定是腸胃炎的表現，應該優先當作腸胃問題處理", correct:false, explain:"頭暈合併嘔吐的原因很多，不應該未經評估就直接認定是腸胃問題。"},
        {text:"只要能說出完整句子，就代表她的意識與神經功能完全沒有問題，可以直接排除送醫的必要", correct:false, explain:"能否說出完整句子只是評估的一部分，不能單憑這項就完全排除需要送醫評估的可能性。"}
      ]},
    {type:"action", scene:"你決定測量生命徵象。",
      prompt:"你會做什麼？",
      correct:{tool:"bloodPressure",target:"leftArm",altTargets:["rightArm"],
        reading:"142/88 mmHg，脈搏 78次/分規則",
        explain:"測量生命徵象作為評估基準，血壓與心律的變化也是頭暈成因評估的一部分。"},
      mistakes:[]},
    {type:"action", scene:"生命徵象量測後。",
      prompt:"你會協助她採取什麼姿勢？",
      correct:{tool:"positionPatient",target:"patient",positionSpec:{position:"recovery"},
        explain:"頭暈合併持續嘔吐的患者，側躺姿勢有助於避免嘔吐物嗆入呼吸道，同時讓她感覺比較舒適。"},
      mistakes:[]},
    {type:"action", scene:"準備送醫。",
      prompt:"交班時你會特別說明什麼？",
      correct:{tool:"handoverReport",target:"scene",
        explain:"交班時要說明頭暈發作的方式（跟姿勢或頭部動作是否有關）、FAST評估結果與生命徵象，這些資訊有助於醫院判斷頭暈的原因方向。"},
      mistakes:[]}
  ]
});
