/*
-create a variable named biggestLength and assign it the value of 0
-create a for loop that:
    a. assigns the value of 0 to i
    b. executes code block if i is less than arr.length
    c. i++
    -if arr[i].length is greater than biggestLength:
        biggestLength = arr[i].length
-create a for loop that:
    a. assigns the value of 0 to j
    b. executes code block if j is less than arr.length
    c. j++
    -if the length method of arr at index j is not equal to  biggestLength:
        arr.splice(j, 1);
return arr;
*/
function solution(arr) {
  let biggestLength = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > biggestLength) {
      biggestLength = arr[i].length
    }
  }

  for (let j = 0; j < arr.length; j++) {
    if (arr[j].length < biggestLength) {
      arr.splice(j, 1);
      j--;
    }
  }
  return arr
}
