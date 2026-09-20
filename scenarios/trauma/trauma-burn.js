SCENARIOS.push({
  id:"trauma-burn", category:"trauma", difficulty:2,
  title:"瓦斯氣爆燒燙傷",
  summary:"火燒傷合併疑似吸入性嗆傷，練習燒傷處置與呼吸道警覺。",
  steps:[
    {type:"action", scene:"廚房瓦斯氣爆，一名女性左手臂與部分軀幹被火燒傷，衣物有些許還在悶燒。",
      prompt:"第一步？",
      correct:{tool:"sceneCheck",target:"scene",explain:"燒傷處置的第一原則是先移除傷患離開危險源、撲滅悶燒的衣物，停止燒傷持續進行。"},
      mistakes:[]},
    {type:"action", scene:"燒傷已停止進行。",
      prompt:"對於燙傷部位你應該？",
      correct:{tool:"coolBurn",target:"leftArm",explain:"用清水沖洗/冷敷降溫（非冰塊），並移除傷處附近未黏連的衣物與飾品，以免腫脹後難以取下，不使用牙膏等偏方。"},
      mistakes:[]},
    {type:"choice", scene:"你評估傷患意識清楚，但你注意到她臉部有些許燒焦的鼻毛與聲音略顯沙啞。",
      question:"這些徵象讓你擔心什麼？",
      choices:[
        {text:"可能有吸入性嗆傷（呼吸道燒傷），須密切監測呼吸道狀況，考慮儘速送醫及給氧", correct:true, explain:"鼻毛燒焦與聲音沙啞是吸入性嗆傷的重要警訊，呼吸道可能快速惡化。"},
        {text:"這只是氣爆當下被熱氣熏到的正常現象，跟燒傷本身沒有直接關聯", correct:false, explain:"鼻毛燒焦與聲音沙啞其實是吸入性嗆傷的重要警訊，不應該當作氣爆當下的正常現象忽視。"},
        {text:"她應該只是被氣爆場面嚇到，情緒平復下來聲音沙啞的狀況就會改善", correct:false, explain:"聲音沙啞合併鼻毛燒焦是呼吸道可能受傷的客觀徵象，不是單純被嚇到的情緒反應，應提高警覺密切監測。"},
        {text:"目前手臂的燒傷比較明顯，應該集中精神先處理手臂的傷口就好", correct:false, explain:"手臂傷口固然需要處理，但也需要同時關注呼吸道嗆傷的風險，呼吸道問題可能惡化得更快。"}
      ]},
    {type:"action", scene:"你完成初步處置。",
      prompt:"接下來你會？",
      correct:{tool:"coverBurn",target:"leftArm",explain:"評估燒傷面積與深度後覆蓋乾淨的敷料，注意保暖避免失溫，儘速送往有能力處理燒傷的醫院。"},
      mistakes:[]}
  ]
});
