/*
-create a variable named asterisksCounter and assign it the value of arr[0].length + 2
-create a variable named asteriskArr and assign it the value of an empty array
loop1:
-create a for loop that:
    a. assigns the value of 0 to i
    b. executes code block if i is less than arr.length
    c. i++
    -call the splice method at arr[i] with 0, 0, and '*' as arguments
    -call the splice method at arr[i] with arr.length, 0, and '*' as arguments
    -continue loop1;
-create a while loop that executes code block if asteriskCounter is greater than 0
    call the push method of asteriskArr with '*' as it's argument
    -decrement asteriskCounter by 1
-call the unshift method on arr with asteriskArr.slice(0) as it's parameter
-call the push method on arr with asteriskArr.slice(0) as it's parameter
-return arr
*/

function solution(arr) {
  debugger;
  let asteriskCounter = arr[0].length + 2
  let asteriskArr = [];
  loop1:
  for (let i = 0; i < arr.length; i++) {
    arr[i].splice(0, 0, '*');
    ar[i].splice(arr.length, 0, '*');
    continue loop1;
  }
  while (asteriskCounter > 0) {
    asteriskArr.push('*');
    asteriskCounter--;
  }
  arr.unshift(asteriskArr.slice(0));
  arr.push(asterisk.slice(0));
  return arr;
}

solution(
  ["a"])
