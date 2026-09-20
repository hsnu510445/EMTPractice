SCENARIOS.push({
  id:"trauma-spinal-cord", category:"trauma", difficulty:3,
  title:"摔落後出現四肢麻木",
  summary:"練習脊椎保護與基礎神經評估：比較左右活動、感覺與症狀趨勢。",
  realCase:{title:"2018 年台灣普悠瑪列車出軌事故",summary:"列車事故中的高速減速、撞擊與受困，可能同時造成頭部、脊椎與四肢創傷，需要記錄每名傷者的初始神經狀態與變化。",learningPoint:"本題練習不要只看疼痛，而要比較左右運動與感覺、記錄時間並注意神經症狀惡化。",source:"https://en.wikipedia.org/wiki/2018_Yilan_train_derailment"},
  steps:[
    {type:"action", scene:"登山者從岩石上摔落，頭頸撞到地面，表示雙手麻、頸部疼痛。", prompt:"接近患者前？",
      correct:{tool:"sceneCheck",target:"scene",explain:"先確認落石、坡地與其他環境危險，確保救援者可以安全接近。"},mistakes:[]},
    {type:"action", scene:"患者清醒，呼吸目前平穩，但表示頸部痛且雙手有針刺感。", prompt:"你要先做什麼？",
      correct:{tool:"manualStabilization",target:"neck",explain:"疑似脊椎損傷時先維持頭頸中立與徒手穩定，同時依初步評估處理呼吸道與呼吸。"},mistakes:[]},
    {type:"choice", scene:"檢查時發現雙手握力都比正常弱，右手較明顯，患者說雙腳也開始麻。", question:"哪一項最需要提高警覺？",
      choices:[
        {text:"有進行性或雙側的運動、感覺異常，應懷疑脊髓或神經系統受傷並持續保護與快速後送",correct:true,explain:"雙側或逐漸惡化的麻木、無力比單純局部疼痛更支持神經系統受影響，需要記錄基準並追蹤變化。"},
        {text:"只要患者能說話，就能排除脊髓損傷",correct:false,explain:"能說話只能表示目前有意識與可發聲，不能排除脊髓損傷。"},
        {text:"要求患者反覆用力扭轉頸部，找出最痛的方向",correct:false,explain:"疑似脊椎傷時不應要求患者主動扭轉頸部或做不必要的挑戰動作。"},
        {text:"只測右手，不需要比較左右或記錄時間",correct:false,explain:"神經評估重點是左右比較、具體描述與趨勢記錄。"}
      ]},
    {type:"action", scene:"患者目前仍能遵從指令，但回答變慢，雙手麻木沒有改善。", prompt:"你還要評估什麼？",
      correct:{tool:"gcsCheck",target:"patient",gcsSpec:{e:4,v:5,m:6},explain:"記錄意識評估的分項與總分，並與後續結果比較；GCS不能取代四肢運動與感覺的記錄。"},mistakes:[]},
    {type:"action", scene:"你已完成初步評估，其他隊員準備協助搬運，患者仍有雙側麻木。", prompt:"等待後送時？",
      correct:{tool:"ongoingMonitor",target:"patient",explain:"持續比較左右肢體活動與感覺、意識、呼吸和循環，任何惡化都要立即回報與交班。"},mistakes:[]}
  ]
});