/*
-assign the value of k to deleteCounter
-create a for loop that:
a. assigns the value of 0 to i
b. executes code block if i is less than arr.length
c. i++
  -decrement deleteCounter by 1
  -if deleteCounter is strictly equal to k:
    call the splice method of arr with i and 1 as it's arguments
    i--
-return arr
*/

const solution = (arr, k) => {
  deleteCounter = k;
  for (let i = 0; i < arr.length; i++) {
    deleteCounter--;
    if (deleteCounter === 0) {
      arr.splice(i, 1);
      i--;
      deleteCounter = k;
    }
  }
  return arr;
}
