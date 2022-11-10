function solution(min1, min2_10, min11, s) {
  if (s < min1) return 0;
  if (s === min1) return 1;

  let minutesCounter = 2;
  let tempS = s - min1
  while (true) {
    if (minutesCounter > 1 &&
      minutesCounter <= 10) {
      tempS -= min2_10
    } else {
      tempS -= min11
    }
    if (tempS < 0) {
      return minutesCounter - 1;
    }
    minutesCounter++
  }
}
