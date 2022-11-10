/*
-create a variable named correctCounter and assign it the value of 0
-create a variable named ignoredIndex and assign it the value of null
-create a variable named arr1 and assign it the value of an empty array literal
-create a variable named arr2 and assign it the value of an empty array literal
-call the push method of arr1 and with yourLeft and yourRight as arguments
-call the push method of arr2 and with friendsLeft and friendsRight as arguments
-create a for loop that:
a. assigns the value of 0 to i
b. executes code block if i is less than arr1.length
c. i++
    -create a for loop that:
    a. assigns the value of 0 to j
    b. executes code block if j is less than arr2.length
    c. j++
        -if arr1[i] is strictly equal to arr2[j] and
        j is not strictly equal to ingnoredIndex:
            increment correctCounter by 1
            assign the value of j to ignoredIndex
            break;
-if correctCounter === 2:
    -return true
-return false
*/
function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  var correctCounter = 0;
  var ignoredIndex = null;
  var arr1 = [];
  var arr2 = [];
  arr1.push(yourLeft, yourRight);
  arr2.push(friendsLeft, friendsRight);
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] &&
        j !== ignoredIndex) {
        correctCounter++;
        ignoredIndex = j
        break;
      }
    }
  }
  if (correctCounter === 2) {
    return true;
  }
  return false;
}
