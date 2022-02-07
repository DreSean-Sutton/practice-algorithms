/*
If length is even all characters need to haved a duplicate
If length isn't, only one character can be standalone
Use indexOf to find out if another occurance of the same character is in the string
/*
-create a new variable named soloCharacterCounter and assign it the value of 0
-create a for loop that:
  a. assigns the value of 0 to i
  b. executes code block if i is less than string.length
  c. i++
  -if the length method of string modulus by 2 is strictly equal to 0
    -if using the indexOf method of string and calling it with string[i] as it's parameter is strictly equal to -1
      return false;
    -else
      -if using the indexOf method of string and calling it with string[i] as it's parameter is strictly equal to -1
        increment SoloCharacterCounter by 1
      -if soloCharacterCounter is greater than 1
        return false
-return true

*/

function solution(string) {
  var newStr = string.slice(0).split('');
  debugger
  let soloCharacterCounter = 0
  for (let i = 0; i < string.length; i++) {
    if (string.length % 2 === 0) {
      newStr.splice(i, 1);
      if (!newStr.includes(string[i])) {
        return false;
      }
      newStr.splice(i, 0, string[i])
    } else {
      newStr.splice(i, 1);
      if (!newStr.includes(string[i])) {
        soloCharacterCounter++
      }
      if (soloCharacterCounter > 1) {
        return false;
      }
      newStr.splice(i, 0, string[i])
    }
  }
  return true;
}


solution("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa")
