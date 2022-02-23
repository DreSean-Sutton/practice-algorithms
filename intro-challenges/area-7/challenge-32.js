/*
-if the length property of arr is strictly equal to 1:
  -return arr[0]
-create a variable named sortedArr and assign it the value of the sort method of array with a function definition (a, b) => a - b as it's argument
-create a variable named bestNum and assign it the value of an empty array literal
-loop1 keyword:
-create a for loop that:
a. assigns the value of 0 to i
b. executes code block if i is less than sortedArr.length
c. i++
  -create a variable named indexCounter and assign it the value of 0
  -loop2 keyword:
  -create a for loop that:
  a. assigns the value of 0 to j
  b. executes code block if j is less than sortedArr.length
  c. j++
    -if sorted[i] is strictly equal to sorted[i - 1]
      state continue loop1 keyword
    -indexCounter += the abs method of Math with sortedArr[i] - sortedArr[j] as it's argument
    -if indexCounter < bestNum[1] or:
    bestNum.length === 0:
      call the splice method of bestNum with 0, 2, and sortedArr[i] and indexCounter as it's arguments
    -else:
      -return bestNum[0]
-return bestNum[0]
*/

const solution = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  }
  const sortedArr = arr.sort((a, b) => a - b);
  const bestNum = [];
  loop1:
  for (let i = 0; i < sortedArr.length; i++) {
    let indexCounter = 0;
    loop2:
    for (let j = 0; j < sortedArr.length; j++) {
      if (sortedArr[i] === sortedArr[i - 1]) {
        continue loop1;
      }
      indexCounter += Math.abs(sortedArr[i] - sortedArr[j]);
    }
    if (indexCounter < bestNum[1] ||
      bestNum.length === 0) {
      bestNum.splice(0, 2, sortedArr[i], indexCounter)
    } else {
      return bestNum[0]
    }
  }
  return bestNum[0]
}
