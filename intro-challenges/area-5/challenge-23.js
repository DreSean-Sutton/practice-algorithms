/*
-create a function named solution with arr as it's parameter
  -create a variable named newArr and assign it the value of an empty array
  -create a variable named tempArr and assign it the value of an empty array
  -create a variable named rowIncrementer and assign it the value of 0
  -create a variable named colIncrementer and assign it the value of 0
  -create a variable named pixelCounter and assign it the value of 0
  -return handleLoops function with arr, rowIncrementer, and colIncrementer as it's arguments

-create a function named handleLoops with arr, rowIncrementer, and colIncrementer as it's parameters
  -create a for loop that:
  a. assigns the value of rowIncrementer to i
  b. executes code block if i is less than 3 + rowIncrementer
  c. i++
    -create a for loop that:
    a. assigns the value of colIncrementer to j
    b. executes code block if j is less than 3 + colIncrementer
    c. j++
      -if arr[i] is strictly equal to undefined:
        return newArr
      -else if arr[i][j] strictly equal to undefined:
        rowIncrementer++
        colIncrementer++
        pixelCounter = 0
        call the push method of newArr with tempArr as it's argument
        temnpArr = []
        call handleLoops with arr, rowIncrementer, and ColIncrementer as it's parameters
      -else:
        pixelCounter += arr[i][j]
  -call the push method of tempArr with pixelCounter as it's argument

*/

function solution(arr) {
  debugger;
  let newArr = [];
  let rowIncrementer = 0;
  let colIncrementer = 0;
  return handleLoops(arr, rowIncrementer, colIncrementer, newArr)
}

function handleLoops(arr, rowIncrementer, colIncrementer, newArr) {
  debugger;
  let pixelCounter = 0;
  let tempArr = [];
  for (let i = rowIncrementer; i < 3 + rowIncrementer; i++) {
    for (let j = colIncrementer; j < 3 + colIncrementer; j++) {
        pixelCounter += arr[i][j]
    }
  }
  tempArr.push(Math.floor(pixelCounter / 9));
  colIncrementer++;
  pixelCounter = 0;
  return handleLoops(arr, rowIncrementer, colIncrementer, newArr);
}

solution([[1, 1, 1],
[1, 7, 1],
[1, 1, 1]]);

//Returning undefined. Needs a return statement
