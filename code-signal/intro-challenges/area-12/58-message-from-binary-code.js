function solution(code) {
  const splitCode = code.split('');
  let resetCounter = 8,
    binaryAddition = 128,
    tempNum = 0,
    codeResult = '';
  splitCode.forEach(index => {
    if (index === '1') {
      tempNum += binaryAddition;
    }
    resetCounter--;
    binaryAddition /= 2;
    if (resetCounter === 0) {
      console.log(tempNum);
      codeResult += String.fromCharCode(tempNum);
      resetCounter = 8;
      binaryAddition = 128;
      tempNum = 0;
    }
  });
  return codeResult;
}
