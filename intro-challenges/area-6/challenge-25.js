/*
-create a variable named newArr and assign it the value of the slice method of inputArr with 0 as it's argument
-create a for loop that:
a. assigns the value of 0 to i
b. executes code block if i is less than  newArr.length
c. i++
  -if newArr at index i is strictly equal to elemToReplace:
    call the splice method of newArr with i, 1, and substitutionElem as it's arguments
-return newArr
*/

function solution(inputArray, elemToReplace, substitutionElem) {
  var newArr = inputArray.slice(0);
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === elemToReplace) {
      newArr.splice(i, 1, substitutionElem);
    }
  }
  return newArr;
}

// MAP VERSION OF HOW TO DO THIS BELOW (NOT MINE)

function solution(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map(i => i == elemToReplace ? substitutionElem : i)
}
