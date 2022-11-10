/**
 * 3 variables
 * - counter, characterChecker, and newStr
 * For loop
 * Perhaps make the below conditional its own module
 * conditional to check if current character is strictly equal to characterChecker
 * - if yes: increment counter by 1
 * - if no: check if counter is more than 0
 * -- if yes: concatonate counter with newStr
 * - concatonate characterChecker with newStr
 * return newStr
 */

function solution(str) {
  debugger;
  let counter = 0;
  let newStr = '';
  let characterChecker = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] === characterChecker) {
      counter++;
    } else {
      if (counter > 0) {
        counter++
        newStr += counter + characterChecker;
      } else {
        newStr += characterChecker;
      }
      counter = 0;
      characterChecker = str[i];
    }
  }
  if (counter > 0) {
    counter++
    return newStr += counter + characterChecker;
  } else {
    return newStr += characterChecker;
  }
}

solution("aabbbc")
