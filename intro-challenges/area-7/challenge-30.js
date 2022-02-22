/*
-create a variable named oppositeIndex and assign it the value of n / 2 + firstNumber
-if oppositeIndex is less than n:
  -return oppositeIndex
-else:
  -return oppositeIndex - n
*/

function solution(n, firstNumber) {
  const oppositeIndex = firstNumber + n / 2
  if (oppositeIndex < n) {
    return oppositeIndex;
  } else {
    return oppositeIndex - n;
  }
}
