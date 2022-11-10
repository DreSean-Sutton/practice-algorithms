/*
-create a variable named tempSubstring and assign it the value of an empty string literal
-create a variable named checkZeroRegex and assign it the value of /^0\d/g
-create a variable named dotTestRegex and assign it the value of the test method of /\./ with str as it's argument
-create a variable named letterTestRegex and assign it the value of the test method of /[A-Za-z]/ with str as it's argument
-if dotTestRegex is not true or
letterTestRegex is true:
  -return false
-if the length property of the match method of str with the regex /\./g as it's argument is not equal to 3:
  -return false
-create a for loop that:
a. assigns the value of 0 to i
b. executes code block if i is less than str.length
c. i++
  -if str[i] is not strictly equal to '.':
    assign tempSubstring the value of str at index i concatenated with tempSubstring
  -else:
    -if tempSubstring is greater than 255 or
    the test method of checkZeroRegex with tempSubstring as it's argument is true:
      -return false
    -else:
      assign the value of an empty string literal to tempSubstring
-if tempSubstring is greater than 255 or
    the test method of chekZeroRegex with tempSubstring as it's argument is true:
      -return false
-return true;
*/
function solution(str) {
  let tempSubstring = '';
  let checkZeroRegex = /^0\d/g;
  let dotTestRegex = /\./g.test(str);
  let letterTestRegex = /[A-Za-z]/g.test(str);
  if ((!dotTestRegex) ||
    (letterTestRegex)) {
    return false;
  }

  if (str.match(/\./g).length !== 3) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '.') {
      tempSubstring += str[i];
    } else {
      if (tempSubstring > 255 ||
        checkZeroRegex.test(tempSubstring) ||
        tempSubstring === '') {
        return false
      } else {
        tempSubstring = '';
      }
    }
  }
  if (tempSubstring > 255 ||
    checkZeroRegex.test(tempSubstring)) {
    return false;
  }
  return true;
}
