/*
-create a variable called movesRequired and assign it the value of 0
-create a for loop that:
  a. assigns the value of 1 to i
  b. executes code block if i is less than arr.length
  c. i++
  if arr[i] is less than or equal to  arr[i - 1]
    -create a new variable named numberCounter and assign it the value of 0
    -take the value of arr at index i - 1, subtract it by arr at index i, and add 1, then assign it to numberCounter
    -add the value of numberCounter to arr[i] and assign it to arr[i]
    -add the value of numberCounter to movesRequired and assign it to movesRequired
-return movesRequired
*/

function solution(arr) {
  let movesRequired = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {

      let numberCounter = 0;
      numberCounter = arr[i - 1] - arr[i] + 1;
      arr[i] += numberCounter;
      movesRequired += numberCounter;
    }
  }
  return movesRequired;
}
