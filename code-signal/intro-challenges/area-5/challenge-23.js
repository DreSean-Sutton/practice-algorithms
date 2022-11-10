/*
-create a variable named newArr and assign it the value of an empty array
-create a variable named tempArr and assign it the value of an empty array
-create a variable named rowIncrementer and assign it the value of 0
-create a variable named colIncrementer and assign it the value of 0

-create a function named solution with arr as it's parameter
-create a variable named pixelCounter and assign it the value of 0
  -create a for loop that:
  a. assigns the value of rowIncrementer to i
  b. executes code block if i is less than 3 + rowIncrementer
  c. i++
    -create a for loop that:
    a. assigns the value of colIncrementer to j
    b. executes code block if j is less than 3 + colIncrementer
    c. j++
      -else if arr[i][j] strictly equal to undefined:
        rowIncrementer++
        assign the value of 0 to colIncrementer
        assign the value of 0 to pixelCounter
        call the push method of newArr with tempArr as it's argument
        tempArr = []
        return function named solution with arr as it's argument
      -else:
        pixelCounter += arr[i][j]
  -call the push method of the floor method of the Math obvject with pixelCounter / 9 as it's argument
  -increment Col by 1
  -assign the value of 0 to pixelCounter
  -return fucntion named solution with arr as it's argument
*/

let newArr = [];
let tempArr = [];
let rowIncrementer = 0;
let colIncrementer = 0;

function solution(arr) {
  debugger;
  let pixelCounter = 0;
  for (let i = rowIncrementer; i < 3 + rowIncrementer; i++) {
    if (arr[i] === undefined) {
      return newArr
    }
    for (let j = colIncrementer; j < 3 + colIncrementer; j++) {
      if(arr[i][j] === undefined) {
        rowIncrementer++
        colIncrementer = 0;
        newArr.push(tempArr);
        tempArr = [];
        return solution(arr);
      } else {
        pixelCounter += arr[i][j]
      }
    }
  }
  tempArr.push(Math.floor(pixelCounter / 9));
  colIncrementer++;
  pixelCounter = 0;
  return solution(arr);
}

solution([[1, 1, 1],
[1, 7, 1],
[1, 1, 1]]);
