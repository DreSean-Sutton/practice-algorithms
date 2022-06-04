/*
-create a variable named jumpDistance and assign it the value of 1
-create a variable named sortedArr and assign it the value of the slice method of
a. the sort method of arr with the anonymous function (a, b) => return b - a
-create a variable named i and assign it the value of 0
-create a while loop that:
a. executes code block if i is less than sortedArr at index 0 plus jumpDistance
  -assign i the value of i + jumpDistance
  -if the includes method of arr with i as it's argument is true:
    i = 0
    incrememnt jumpDistance by 1
    continue
-return jumpDistance
*/

function solution(arr) {
  debugger;
  let jumpDistance = 1;
  let sortedArr = arr.slice(0).sort((a, b) => { return b - a });
  let i = 0
  while (i < (sortedArr[0] + jumpDistance)) {
    i += jumpDistance
    if (arr.includes(i)) {
      i = 0;
      jumpDistance++
      continue;
    }
  }
  return jumpDistance;
}

solution([1, 4, 10, 6, 2]);
