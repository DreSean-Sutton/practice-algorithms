/*
-create a variable named maxSum and assign it the value of null
-create a for loop that:
a. assigns the value of 0 to i
b. executes code block if i is less than arr.length - k
c. i++
  -create a variable named currentSum and assign it the value of 0
  -create a for loop that:
  a. assigns the value of i to j
  b. executes code block if j is less than i + k
  c. j++
    -assign the value of currentSum + arr[i] to variable currentSum
  -if currentSum is greater than maxSum:
    assign the value of currentSum to maxSum
-return maxSum
*/

const solution = (arr, k) => {
  debugger;
  let maxSum = null
  for (let i = 0; i < arr.length + 1 - k; i++) {
    let currentSum = 0;
    for (let j = i; j < i + k; j++) {
      currentSum += arr[j];
    }
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
}

solution([1, 3, 2, 4], 3)
