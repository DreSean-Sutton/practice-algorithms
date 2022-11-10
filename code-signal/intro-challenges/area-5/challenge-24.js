/*
-create a variable named newMatrix and assign it the value of an emptry array literal
-create a variable named mineCounter and assign it the value of 0
-create a variable named rowLoopStopper and assign it the value of 2
-create a for loop that:
a. assigns the value of 0 to i
b. executes code block if i is less than the length property of matrix
c. i++
  -create a variable named colLoopStopper and assign it the value of 2
  -create a variable named tempMatrix and assign it the value of an empty array literal
  -create a for loop that:
  a. assigns the value of 0 to j
  b. executes code block if j is less than the length property of matrix at index i
  c. j++
    -create a for loop that:
    a. assigns the value of i - 1 to k
    b. executes code block if k is less than rowLoopStopper
    c. k++
      -create a for loop that:
      a. assigns the value of j - 1 to l
      b. executes code block if l is less than colLoopStopper
      c. l++
        -if matrix at index k is strictly equal to undefined or
        matrix at index k at index l is strictly equal to unefined:
          call the continue statement
        -if i is strictly equal to k and
        j is strictly equal to l
          call the continue statement
        -if matrix at index k at index l is true:
          increment mineCounter by 1
    -call the push method of tempMatrix with mineCounter as it's argument
    -assign the value of 0 to mineCounter
    -increment colLoopStopper by 1
  -call the push method of newMatrix with tempMatrix as it's argument
  -increment rowLoopStopper by 1
-return newMatrix
*/

function solution(matrix) {
  let newMatrix = [];
  let mineCounter = 0;
  let rowLoopStopper = 2;
  for (let i = 0; i < matrix.length; i++) {
    let colLoopStopper = 2;
    let tempMatrix = [];
    for (let j = 0; j < matrix[i].length; j++) {
      for (let k = i - 1; k < rowLoopStopper; k++) {
        for (let l = j - 1; l < colLoopStopper; l++) {
          if(matrix[k] === undefined ||
            matrix[k][l] === undefined) {
              continue;
            }
          if (i === k &&
            j === l) {
              continue;
            }
          if (matrix[k][l]) {
            mineCounter++;
          }
        }
      }
      tempMatrix.push(mineCounter);
      mineCounter = 0;
      colLoopStopper++;
    }
    newMatrix.push(tempMatrix);
    rowLoopStopper++;
  }
  return newMatrix;
}

solution(
[[true, false, false, true],
[false, false, true, false],
[true, true, false, true]]
)
