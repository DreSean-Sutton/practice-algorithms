function belvethUltPassive(baseDmg, hits, bonusAD) {
  let totalDmg = 0;
  let i = 0;
  bonusAD
    ? fullDmg = baseDmg + (baseDmg * 0.0012 * bonusAD)
    : fullDmg = baseDmg
  while (i <= hits) {
    if (i % 2 === 0) {
      damagePer2Hits();
    }
    i++;
  }
  function damagePer2Hits() {
    totalDmg += fullDmg * i / 2;
    return;
  }
  return Number(totalDmg.toFixed(1));
}

// Another way on how to do it below

// const belvethUltPassive = (baseDmg, hits, bonusAD) => {
//   let burst = 0;
//   let damage = 0;
//   for (let hit = 1; hit <= hits; hit++) {
//     // every two hits, do a burst of damage
//     if (hit % 2 === 0) {
//       // each burst increases the damage of the next burst by the amount just dealt
//       // burst damage is base damage plus an additional 0.12% of base damage per bonus ad
//       bonusAD
//         ? burst += baseDmg + (baseDmg * 0.0012 * bonusAD)
//         : burst += baseDmg
//       damage += burst;
//     }
//   }
//   return +(damage).toFixed(1);
// };
