/*
If length is even all characters need to haved a duplicate
If length isn't, only one character can be standalone
Use indexOf to find out if another occurance of the same character is in the string
/*
-create a variable named usedLetters and assign it the value of an empty array literal
-create a variable named newStr and assign it the value of the split method with '' as
-create a variable named IndexCounter and assign it the value of the new operator of the length property of RegExp with string[i] and g as it's parameters
a. it's argument of the slice method of string with 0 as it's argument
-create a variable named soloCharacterCounter and assign it the value of 0
-create a for loop that:
  a. assigns the value of 0 to i
  b. executes code block if i is less than string.length
  c. i++
  -if the includes method of usedLetters with string[i] as it's argument is true:
    call the continue statement
  -if the length method of string modulus by 2 is strictly equal to 0:
    call the push method of usedLetters with string[i] as it's argument
    call the splice method of newstr with i and 1 as it's arguments
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
  debugger;
  let usedLetters = [];
  let newStr = string.slice(0).split('');
  let soloCharacterCounter = 0
  let oddDuplicateNumber = 0;

  for (let i = 0; i < string.length; i++) {
    if (usedLetters.includes(string[i])) {
      continue;
    }
    let currentLetter = string[i];
    let letterCount = new RegExp(currentLetter, 'g');
    let duplicateCounter = string.match(letterCount).length;
    if (duplicateCounter % 2 !== 0) {
      oddDuplicateNumber++
    }
    if (oddDuplicateNumber > 1) {
      debugger;
      return false;
    }
    if (string.length % 2 === 0) {
      usedLetters.push(string[i]);
      newStr.splice(i, 1);
      if (!newStr.includes(string[i])) {
        debugger;
        return false;
      }
      newStr.splice(i, 0, string[i])
    } else {
      newStr.splice(i, 1);
      if (!newStr.includes(string[i])) {
        soloCharacterCounter++
      }
      if (soloCharacterCounter > 1) {
        debugger;
        return false;
      }
      newStr.splice(i, 0, string[i])
    }
  }
  debugger;
  return true;
}


solution("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa")
