SCENARIOS.push({
  id:"trauma-sports-ankle", category:"trauma", difficulty:2,
  title:"籃球場上的腳踝扭傷",
  summary:"打籃球落地時腳踝內翻，走不了，練習判斷嚴重度與RICE處置。",
  steps:[
    {type:"action", scene:"你在球場邊，一名20歲男性打籃球落地時左腳踝內翻，痛得坐倒在地，同伴扶著他，左腳踝明顯腫脹。",
      prompt:"你靠近後第一步？",
      correct:{tool:"generalImpression",target:"patient",
        giRelevant:["leftLeg:legWound","patient:distress"],
        giFindings:{
          "leftLeg:legWound":"左腳踝明顯腫脹，外觀沒有明顯開放性傷口",
          "patient:distress":"表情痛苦，無法自行站立"
        },
        explain:"建立整體印象，觀察受傷部位腫脹、變形程度，以及病人的疼痛與活動能力。"},
      mistakes:[]},
    {type:"choice", scene:"他說完全無法踩地站立，腳踝外側明顯腫脹瘀青，但外觀沒有明顯錯位變形。",
      question:"「完全無法承重站立」這個資訊，對你判斷傷勢嚴重度有什麼意義？",
      choices:[
        {text:"無法承重是懷疑骨折的重要警訊之一，即使外觀沒有明顯變形，也應以懷疑骨折的方式處置（固定、避免移動患肢），而非當作單純扭傷處理", correct:true, explain:"無法承重、明顯腫脹瘀青、局部劇烈壓痛都是懷疑骨折的臨床線索，現場難以單靠外觀排除骨折，應以較保守的方式固定處置。"},
        {text:"外觀沒有明顯的錯位變形，代表骨頭應該是完整的，只是單純的韌帶扭傷而已", correct:false, explain:"外觀正常不能排除骨折的可能，無法承重站立本身就是需要提高警覺的重要警訊。"},
        {text:"能不能站立主要跟當下的疼痛忍受度有關，跟骨頭是否受傷的嚴重程度沒有直接關係", correct:false, explain:"是否能承重其實是臨床上常用來評估肢體嚴重度的重要依據，跟骨骼結構是否穩定有關。"},
        {text:"可以請他試著扶著東西慢慢走幾步看看，藉此確認他的腳踝到底能不能負重", correct:false, explain:"懷疑骨折時不應該讓病人嘗試承重走動測試，這樣做可能會加重原本的傷害。"}
      ]},
    {type:"action", scene:"你決定以懷疑骨折的方式處置，固定前你要先確認患肢遠端的血液循環。",
      prompt:"你會怎麼做？",
      correct:{tool:"pulseCheck",target:"leftLeg",
        reading:"足背動脈可觸及，微弱；腳趾膚色正常、可自行輕微移動",
        explain:"固定前後都應確認患肢遠端的循環、感覺與活動（CSM），確保固定沒有壓迫到血管神經。"},
      mistakes:[]},
    {type:"action", scene:"確認遠端循環後，你準備固定腳踝。",
      prompt:"你會使用？",
      correct:{tool:"splint",target:"leftLeg",explain:"以夾板固定於發現時的姿勢，不強行復位或矯正變形，固定範圍應包含上下鄰近關節。"},
      mistakes:[]},
    {type:"action", scene:"固定完成後。",
      prompt:"接下來你會做什麼降低腫脹與疼痛？",
      correct:{tool:"coldPack",target:"leftLeg",explain:"冰敷有助於減少腫脹與疼痛，注意冰敷袋不要直接接觸皮膚太久，避免凍傷。"},
      mistakes:[]},
    {type:"action", scene:"冰敷之後。",
      prompt:"你還會協助他做什麼？",
      correct:{tool:"positionPatient",target:"patient",positionSpec:{position:"elevateLimb"},explain:"抬高患肢有助於減少腫脹，這是RICE處置原則中的最後一項。"},
      mistakes:[]},
    {type:"choice", scene:"處置告一段落，準備送醫進一步檢查是否骨折。",
      question:"RICE這個口訣分別代表什麼？（複習用）",
      choices:[
        {text:"R休息 Rest　I冰敷 Ice　C加壓包紮 Compression　E抬高患肢 Elevation", correct:true, explain:"RICE是急性軟組織扭挫傷/疑似骨折現場處置的常用口訣。"},
        {text:"R復位 Reduce　I固定 Immobilize　C冷卻 Cool　E運動 Exercise", correct:false, explain:"不是正確的RICE定義，且急性期不應嘗試復位或立即運動。"},
        {text:"R轉診 Refer　I固定 Immobilize　C持續觀察 Continue　E緊急送醫 Emergency", correct:false, explain:"這不是RICE的正確定義，正確內容應為休息、冰敷、加壓包紮、抬高患肢。"},
        {text:"RICE主要是設計給手部傷害使用的處置原則，腳踝這類下肢傷害不適用", correct:false, explain:"RICE適用於各種急性軟組織扭挫傷，並不限於手部，腳踝扭傷同樣適用。"}
      ]}
  ]
});
