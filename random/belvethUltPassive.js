function belvethUltPassive(baseDmg, hits, bonusAd) {
  let totalDmg = 0;
  let i = 0;
  bonusAd
    ? fullDmg = (baseDmg + bonusAd / 100)
    : fullDmg = baseDmg
  while (i <= hits) {
    if (i % 2 === 0) {
      damagePer2Hits(fullDmg, i);
    }
    i++;
  }
  function damagePer2Hits(dmg, stack) {
    totalDmg += dmg * stack / 2;
    return;
  }
  return Number(totalDmg.toFixed(1));
}
