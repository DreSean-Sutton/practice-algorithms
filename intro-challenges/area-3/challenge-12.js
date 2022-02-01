/*
-create a variable named peopleHeights and assign it the value of an empty array
-create a variable named peopleIndex and assign it the value of 0
-create a variable named sortedPeople and assign it the value of an empty array
-LOOP1
-create a for loop that:
  a. assigns the value of 0 to i
  b. executes code block if i is less than arr.length;
  c. i++
  -if arr[i] is not strictly equal to -1
  push the value of arr[i] into peopleHeights
  call the sort method of peopleHeights with no arguments and assign it to sortePeople
  LOOP2
  -create a for loop that:
    a. assigns the value of 0 to j
    b. executes code block if j is less than arr.length;
    c. j++
    -if arr is not strictly equal to -1
      call the splice method of arr[j] with j, 1, and peopleHeights at peopleIndex as arguments
      increment peopleIndex by 1
      else:
      continue loop2
-return arr
*/
function solution(arr) {
  debugger;
  let peopleHeights = [];
  let peopleIndex = 0;
  let sortedPeople = [];
  loop1:
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== -1) {
      peopleHeights.push(arr[i]);
      sortedPeople = peopleHeights.sort(function (a, b) { return a - b });
      continue loop1;
    }
  }
  loop2:
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== -1) {
      arr.splice(j, 1, peopleHeights[peopleIndex]);
      peopleIndex++
      continue loop2;
    }
  }
  return arr;
}

solution([-1, 150, 190, 170, -1, -1, 160, 180])

// SOLUTION UTILIZING FILTER AND MAP METHOD, BELOW

function solution(a) {
  var s = a.filter(h => h > 0).sort((a, b) => a - b)
  return a.map(p => {
    if (p !== -1) {
      return s.shift();
    }

    return -1;
  })
}
