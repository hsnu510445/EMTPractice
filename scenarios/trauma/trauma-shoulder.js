SCENARIOS.push({
  id:"trauma-shoulder", category:"trauma", difficulty:1,
  title:"跌倒後不敢動肩膀的球員",
  summary:"練習上肢創傷的循環感覺運動評估、固定與固定後再評估。",
  steps:[
    {type:"action", scene:"一名19歲球員跌倒後右肩劇痛，手臂維持在身體旁，不敢主動抬起。",
      prompt:"先做什麼？",
      correct:{tool:"generalImpression",target:"patient",giRelevant:["rightArm:armWound"],giFindings:{"rightArm:armWound":"右肩明顯疼痛，患者不願主動活動右上肢"},explain:"先觀察外觀、疼痛程度與活動能力，不急著要求患者大幅活動受傷部位。"},mistakes:[]},
    {type:"action", scene:"右肩看起來腫脹，但沒有明顯大量出血。",
      prompt:"固定前你要先確認什麼？",
      correct:{tool:"pulseCheck",target:"rightArm",reading:"橈動脈可觸及，手指膚色正常，可感覺觸碰並能輕微活動手指",explain:"固定前確認遠端循環、感覺與活動，作為固定後比較基準。"},mistakes:[]},
    {type:"action", scene:"你準備保護右上肢。",
      prompt:"你會使用？",
      correct:{tool:"triangularBandage",target:"rightArm",explain:"可依傷勢使用三角巾協助懸吊與固定，避免不必要的活動。"},mistakes:[]},
    {type:"action", scene:"固定完成。",
      prompt:"固定後？",
      correct:{tool:"pulseCheck",target:"rightArm",reading:"橈動脈仍可觸及，手指溫暖、感覺與活動沒有明顯改變",explain:"固定後再次確認循環、感覺與活動，確認固定沒有造成新的神經血管問題。"},mistakes:[]},
    {type:"action", scene:"準備送醫。",
      prompt:"你還會做什麼？",
      correct:{tool:"ongoingMonitor",target:"patient",explain:"持續觀察疼痛、循環與患者整體狀況，並送醫進一步檢查。"},mistakes:[]}
  ]
});
