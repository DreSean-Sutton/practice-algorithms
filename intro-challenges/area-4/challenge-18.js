
/*
-create a variable named usedLetters and assign it the value of an empty array literal
-create a variable named newStr and assign it the value of the split method with '' as
a. it's argument of the slice method of string with 0 as it's argument
-create a variable named soloCharacterCounter and assign it the value of 0
-create a variable named oddDuplicateNumber and asign it the value of 0
-create a for loop that:
  a. assigns the value of 0 to i
  b. executes code block if i is less than string.length
  c. i++
  -if the includes method of usedLetters with string[i] as it's argument is true:
    call the continue statement
  -create a variable named currentLetter and assign it the value of string at index i
  -create a variable named letterCounter and assign it the value of the new function named RegExp with
  a. currentLetter and the string 'g' as it's arguments
  -create a variable named duplicateCounter and assign it the value of the length
  a. property of the match method of string with letterCount as it's argument
  -if duplicateCounter modulated by 2 is not strictly equal to 0:
    increment oddDuplicateNumber by 1
  -if oddDuplicateNumber is greater than 1:
    return false
  -if the length property of string modulated by 2 is stictly equal to 0:
    call the push method of usedLetters with string[i] as it's argument
    call the splice method of newstr with i and 1 as it's arguments
    -if the includes method of newStr with string[i] as it's argument is false:
    return false;
    -call the splice method of newStr with i, 0, and string[i] as it's arguments
    -else
    call the splice method of newStr with i and 1 as it's arguments
    -if the includes method of newStr with string[i] as it's argument is false:
        increment SoloCharacterCounter by 1
    -if soloCharacterCounter is greater than 1
      return false
    -call teh splice method of newStr with i, 0, and string[i] as it's arguments
-return true

*/

function solution(string) {
  // debugger;
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
      // debugger;
      return false;
    }
    if (string.length % 2 === 0) {
      usedLetters.push(string[i]);
      newStr.splice(i, 1);
      if (!newStr.includes(string[i])) {
        // debugger;
        return false;
      }
      newStr.splice(i, 0, string[i])
    } else {
      newStr.splice(i, 1);
      if (!newStr.includes(string[i])) {
        soloCharacterCounter++
      }
      if (soloCharacterCounter > 1) {
        // debugger;
        return false;
      }
      newStr.splice(i, 0, string[i])
    }
  }
  // debugger;
  return true;
}


solution("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa")
