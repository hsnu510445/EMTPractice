SCENARIOS.push({
  id:"trauma-electrical", category:"trauma", difficulty:3,
  title:"廠房裡倒地的維修工人",
  summary:"倒地的工人身旁有損壞的電線，外觀傷勢不大，但你需要注意的不只是傷口。",
  steps:[
    {type:"action", scene:"你接獲通報，一名工人在廠房內倒地，旁邊地上有一條外皮破損的電線，地面還有些濕。",
      prompt:"接觸傷患前你最需要確認什麼？",
      correct:{tool:"sceneCheck",target:"scene",explain:"電源若未確認已切斷，貿然觸碰傷患或潮濕地面可能讓你自己也遭到電擊；應先確認電源已關閉，或由具備絕緣裝備、受過訓練的人員先隔離電源，才能安全接觸。"},
      mistakes:[{tool:"verbalCheck",target:"patient",explain:"電源尚未確認關閉前直接接觸傷患，有觸電風險，需先確保現場安全。"}]},
    {type:"emergency", timeLimit:8, randomChance:0.4,
      scene:"同事正在確認電源總開關時，另一名不知情的員工急著想幫忙，伸手就要去把地上那條電線移開。",
      question:"你會怎麼做？",
      choices:[
        {text:"立即出聲制止他，說明電源尚未確認完全安全前，任何人都不應該觸碰電線或站在潮濕區域", correct:true, explain:"電源是否真的已經切斷還在確認中，貿然觸碰電線可能讓這名員工也變成新的傷患。"},
        {text:"讓他移開沒關係，反正主開關應該快關了，先把電線挪開比較不會絆到人", correct:false, explain:"在電源確實關閉並確認安全之前，不應該讓任何人觸碰電線，即使開關「應該快關了」也不能假設安全。"},
        {text:"不特別出聲阻止，只是心裡覺得這樣做不太好，繼續專心處理原本的傷患", correct:false, explain:"發現有立即的觸電風險時應該主動出聲制止，不能只是心裡覺得不妥卻不採取行動。"},
        {text:"請他順便把電線拿去丟掉，同時清空現場動線方便搬運傷患", correct:false, explain:"在確認電源安全前，不應該指示任何人去移動或處理電線。"}
      ]},
    {type:"action", scene:"同事已確認並關閉了電源總開關，現場安全。",
      prompt:"你接觸傷患後第一步？",
      correct:{tool:"verbalCheck",target:"patient",explain:"確認現場安全後，依初步評估順序先確認意識程度（AVPU）。"},
      mistakes:[]},
    {type:"action", scene:"他毫無反應，你檢查呼吸與脈搏。",
      prompt:"你會怎麼確認？",
      correct:{tool:"pulseCheck",target:"neck",
        reading:"未觸得脈搏；未見胸部起伏",
        explain:"電擊可能直接造成心律不整甚至心跳停止，即使體表看起來傷勢不重，也要確實檢查呼吸與脈搏。"},
      mistakes:[]},
    {type:"action", scene:"確認無呼吸、無脈搏，同事也趕來幫忙，你們要立即分工開始CPR並準備AED。",
      prompt:"開始完整的CPR流程（含AED）",
      cprSim:true,
      correct:{tool:"cpr",target:"chest",explain:"無呼吸無脈搏應立即開始CPR，比例30:2，並儘速使用AED；電擊傷病患的心律不整風險較高，CPR與AED的即時性格外重要。"},
      mistakes:[]},
    {type:"choice", scene:"急救人員接手後，你注意到他右手掌與左腳掌各有一處邊緣清楚的灰白色燒傷痕跡。",
      question:"同時出現兩處燒傷痕跡（一處在手、一處在腳），最可能代表什麼，這對你判斷傷勢嚴重度有什麼意義？",
      choices:[
        {text:"很可能是電流的進、出口燒傷，代表電流貫穿身體，即使外觀燒傷範圍不大，也要高度警覺體內組織與心臟可能受到的損傷", correct:true, explain:"電擊傷的體表燒傷範圍常常無法反映內部損傷的嚴重程度，進、出口燒傷提示電流路徑貫穿身體，可能影響心臟、肌肉與內臟。"},
        {text:"這應該是工作過程中不小心碰撞造成的兩處擦傷，跟剛才的觸電事件是分開的意外", correct:false, explain:"傷口位置對稱且外觀特殊（灰白色、邊緣清楚），出現在觸電事件後，應考慮與電擊相關的進出口傷，而不是無關的擦傷。"},
        {text:"傷口只出現在皮膚表面，代表電流應該只有經過體表，沒有真正流入身體內部", correct:false, explain:"這樣一手一腳的傷口型態，恰好提示電流可能貫穿身體，而不是僅止於體表。"},
        {text:"急救人員已經接手後續處理，且傷口看起來不大，代表傷患目前已經脫離危險", correct:false, explain:"電擊傷可能有延遲性心律不整的風險，不能因為體表傷勢看起來輕微，就判斷已經沒有生命危險。"}
      ]}
  ]
});
