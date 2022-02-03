/*
-check to see if both arrays contain the same exact numbers
-create a counter that increments if both arrays at the same index aren't equal
-iterate through the array, checking to see if it's strictly equal
-return false if counter is higher than 2
-return true if iteration ends and counter is at or less than 2
/*

/*
-if arr1.length is not strictly equal to arr2.length
  return
-create variable named wrongIndex and assign it the value of 0
-create a for loop that:
  a. assigns the value of 0 to i
  b. executes code block if i is less than arr1.length
  c. i++
  -if arr1[i] is not strictly equal to arr2[i]
    increment wrongIndex by 1
  -if wrongIndex is greater than 2
    return false
-return true
*/

function solution(arr1, arr2) {
  const wrongIndex = 0
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      wrongIndex++
    }
    if (wrongIndex > 2) {
      return false;
    }
  }
  return true;
}
