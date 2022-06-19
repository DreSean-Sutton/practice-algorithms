function solution(n) {
  let highestNum = null;
  const splitNum = JSON.stringify(n).split('');
  for (let i = 0; i < splitNum.length; i++) {
    const copiedArr = splitNum.slice(0);
    copiedArr.splice(i, 1);
    const testNum = Number(copiedArr.join(''));
    if (!highestNum ||
      highestNum < testNum) {
      highestNum = testNum;
    }
  }
  return highestNum;
}
