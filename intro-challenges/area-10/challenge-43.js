const solution = (str) => {
  let isTrue = true;
  debugger;
  const newStr = str.slice(0);
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === 'a') {
      continue;
    }
    const previousCharCode = newStr[i].charCodeAt(0) - 1;
    const previousLetter = String.fromCharCode(previousCharCode)
    let previousCounter = 0;
    let currentCounter = 0;
    for (let j = 0; j < newStr.length; j++) {
      if (newStr[j] === previousLetter) {
        previousCounter++
      } else if (newStr[j] === newStr[i]) {
        currentCounter++
      }
    }
    if (previousCounter < currentCounter) {
      isTrue = false
    }
    if (!isTrue) {
      return false
    }
  }
  return true
}

solution("bbbaacdafe")
