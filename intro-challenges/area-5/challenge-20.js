/*
-create a variable named maxDifference and assign it the value of 0
-create a for loop that:
a. assigns the value of 1 to i
b. execute code block if i is less than arr.length
c. i++
    -if the abs method of Math with arr[i] - arr[i - 1] as it's argument is more than maxDifference:
        assign the value of the abs method of Math with  arr[i] - arr[i - 1] as it's argument to maxDifference
-return maxDifference
*/

function solution(arr) {
  let maxDifference = 0;
  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[i - 1]) > maxDifference) {
      maxDifference = Math.abs(arr[i] - arr[i - 1]);
    }
  }
  return maxDifference;
}
