/*
-call the slice method of str with 0 as it's argument and assign it's value to newStr
-create a for loop that:
a. assigns the value of 2 to a
b. executes code block if i is less than newStr.length
c. i++
  -call handleCharCode with newStr and newStr[i] as it's argument

*/

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
    for (let j = 0; j < i + 1; j++) {
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

// Works with 8/10 test. Possibly start first for loop at end of str and count backwards
