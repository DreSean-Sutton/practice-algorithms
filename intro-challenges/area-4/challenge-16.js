/*
-create a function named solution with arr1 and arr2 as it's arguments
  -create a variable named testArr and assign it the value of an empty array literal
  -if the length property of arr1 is not strictly equal to the length property of arr2:
    -return false;
  -create a for loop that:
  a. assigns the value of 0 to i
  b. executes the code block if i is less than the length property of arr1
  c. i++
    -if arr1 at index i is not strictly equal to arr2 at index i:
      call the push method of testArr with arr1 at index i and arr2 at index i as it's arguments
  -if the length property of testArr is strictly equal to 0:
    return true
  -else if the length property of testArr is strictly equal to 4:
    -if testArr at index 0 is strictly equal to testArr at index 3 and
    a. testArr at index 1 is strictly equalt to testArr at index 2:
      return true;
-return false;
*/

function solution(arr1, arr2) {

  let testArr = []
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      testArr.push(arr1[i], arr2[i]);
    }

  }
  if (testArr.length === 0) {
    return true;
  } else if (testArr.length === 4) {
    if (
      testArr[0] === testArr[3] &&
      testArr[1] === testArr[2]
    ) {
      return true;
    }
  }
  return false;
}
