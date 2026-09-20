SCENARIOS.push({
  id:"special-button-battery", category:"special", difficulty:2,
  title:"玩具不見的鈕扣電池",
  summary:"18個月大的幼兒拿著拆開的玩具，電池蓋不見了，孩子一直流口水不肯吃東西。",
  steps:[
    {type:"action", scene:"家長打電話說18個月大的孩子拿著一個拆開的玩具玩，發現裝鈕扣電池的蓋子開著，裡面的電池不見了，孩子這一兩個小時一直流口水、不太願意吃東西。",
      prompt:"抵達現場後第一步？",
      correct:{tool:"generalImpression",target:"patient",
        giRelevant:["patient:posture","patient:distress","head:drooling"],
        giFindings:{
          "patient:posture":"活動力比平常略低，但還能自己坐著玩",
          "patient:distress":"呼吸看起來還算平順，沒有明顯費力",
          "head:drooling":"持續流口水，不太願意吞嚥或進食"
        },
        explain:"建立整體印象，觀察孩子目前的活動力、呼吸與整體狀況。"},
      mistakes:[]},
    {type:"choice", scene:"家長不確定電池到底是弄丟了還是被孩子吞下去，孩子目前看起來活動力還算正常，但持續流口水、不太想吃東西。",
      question:"不確定電池是否被吞下，加上流口水、不想吃東西，你會怎麼看待這個狀況？",
      choices:[
        {text:"鈕扣電池誤食是時間敏感的緊急狀況，即使不確定是否真的吞下、孩子目前看起來還好，也應該當作可能誤食處理並儘速送醫評估", correct:true, explain:"鈕扣電池若卡在食道，可能在短短幾小時內因電流分解組織造成嚴重灼傷甚至穿孔，這類案件即使症狀輕微也必須高度警覺並儘速就醫，不能用「看起來還好」來排除。"},
        {text:"孩子活動力看起來還算正常，可能只是電池滾到別的地方去了，先在家裡找找看電池", correct:false, explain:"不能單憑外觀活動力正常就排除誤食的可能，應優先當作可能誤食處理，而不是先花時間找電池。"},
        {text:"這個年紀的孩子流口水多半是在長牙的正常現象，跟電池不見應該是兩回事", correct:false, explain:"合併電池遺失的病史，不應輕易把流口水歸因於長牙而忽略誤食風險，兩者要一起考慮。"},
        {text:"可以先觀察幾天，等孩子解便時檢查看看電池有沒有隨著排泄物排出來", correct:false, explain:"等待觀察可能延誤治療時機，鈕扣電池若卡在食道會持續造成傷害，是分秒必爭的狀況。"}
      ]},
    {type:"action", scene:"你決定當作可能誤食處理。",
      prompt:"你會做什麼準備工作？",
      correct:{tool:"preserveEvidence",target:"scene",explain:"帶上玩具、電池包裝或同型號電池讓醫院知道電池的大小與型號，這對醫療團隊判斷處置方式非常重要。"},
      mistakes:[]},
    {type:"choice", scene:"家長問「要不要先給他喝點東西，或用手指挖挖看喉嚨？」",
      question:"你會怎麼建議？",
      choices:[
        {text:"不要催吐、不要用手指探喉嚨，也不要在未經指示下自行給予特定食物，應保持孩子平靜並儘速送醫，交由醫療團隊評估處置", correct:true, explain:"自行催吐或探喉可能造成額外傷害或嗆入風險；是否可給予特定食物（如蜂蜜）在不同指引中有爭議且有年齡限制，非專業判斷下不應自行嘗試，應以儘速送醫為優先。"},
        {text:"可以試著用手指伸進孩子喉嚨裡，摸索看看能不能把電池挖出來", correct:false, explain:"用手指探喉可能造成嗆入或額外傷害，不建議自行嘗試，應交由醫療團隊處理。"},
        {text:"讓孩子喝下大量開水，希望能把電池沖到胃裡、加速排出體外", correct:false, explain:"不是建議的處置方式，大量灌水無法確保安全排出，應交由醫療團隊評估處置方式。"},
        {text:"用手壓孩子的腹部或催吐，讓電池能夠儘快吐出來", correct:false, explain:"不建議自行催吐，可能讓電池在嘔吐過程中造成額外的食道或呼吸道傷害。"}
      ]},
    {type:"action", scene:"你準備送醫。",
      prompt:"你會？",
      correct:{tool:"handoverReport",target:"scene",explain:"交班時清楚說明孩子最後一次正常進食/活動的時間、電池可能誤食的時間點、電池型號大小等資訊，協助醫療團隊評估緊急處置的優先度。"},
      mistakes:[]}
  ]
});
