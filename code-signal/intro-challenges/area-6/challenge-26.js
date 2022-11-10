/*
-create a varible named strNumber and assign it the value of the method toString of n
-create a for loop that:
a. assigns the value of 0 to i
b. executes code block if i is less than strNumber.length
c. i++
  -create a variable named currentNumber and assign it the value of the parseInt method of Number with strNumber[i] as it's argument
  -if currentNumber % 2 is not strictly equal to 0:
    return false
return true
*/

function solution(n) {
  var strNumber = n.toString();
  for (let i = 0; i < strNumber.length; i++) {
    var currentNumber = Number.parseInt(strNumber[i])
    if (currentNumber % 2 !== 0) {
      return false;
    }
  }
  return true
}

// Hilarous Regex version of this same algorithm (not mine)

function solution(n) {
  return !(n + '').match(/[13579]/)
}
