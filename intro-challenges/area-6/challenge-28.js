/*
-create a variable named newStr and assign it the value of an empty string literal
-create a for loop that:
a. assign the value of 0 to i
b. executes code block if i is less than str.length
c. i++
  -if str[i] is strictly equal to 'z'
    -assign the value of newStr + 'a' to newStr
    -declare the continue statement
  -create a variable named currentCode and assign it the value of the charCodeAt method of str with i as it's argument and add it by 1
  -create a variable named newLetter and assign it the value of the fromCharCode method of String with currentCode as it's argument
  -assign the value of newLetter + newStr into newStr
*/

let solution = (str) => {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'z') {
      newStr += 'a';
      continue;
    }
    var currentCode = str.charCodeAt(i) + 1;
    var newLetter = String.fromCharCode(currentCode);
    newStr += newLetter;
  }
  return newStr
}
