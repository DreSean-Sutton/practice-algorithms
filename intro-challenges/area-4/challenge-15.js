/*
-create a variable named asterisksCounter and assign it the value of arr[0].length + 2
-create a variable named asteriskArr and assign it the value of an empty array
loop1:
-create a for loop that:
    a. assigns the value of 0 to i
    b. executes code block if i is less than arr.length
    c. i++
    -assign the value of `*${arr[i]}*` to arr[i]
    -continue loop1;
-create a while loop that executes code block if asteriskCounter is greater than 0
    call the push method of asteriskArr with '*' as it's argument
    -decrement asteriskCounter by 1
-call the unshift method on arr with asteriskArr.slice(0).join('') as it's parameter
-call the push method on arr with asteriskArr.slice(0).join('') as it's parameter
-return arr
*/

function solution(arr) {
  let asteriskCounter = arr[0].length + 2
  let asteriskArr = [];
  loop1:
  for (let i = 0; i < arr.length; i++) {
    arr[i] = `*${arr[i]}*`
    continue loop1;
  }
  while (asteriskCounter > 0) {
    asteriskArr.push('*');
    asteriskCounter--;
  }
  arr.unshift(asteriskArr.slice(0).join(''));
  arr.push(asteriskArr.slice(0).join(''));
  return arr;
}

solution(
  ["a"])


//  COOL SOLUTION BELOW THAT UTILIZES MAP METHOD (NOT MINE)

function solution(picture) {
  var width = picture[0].length + 2;
  return [
    '*'.repeat(width),
    ...picture.map(line => `*${line}*`),
    '*'.repeat(width)
  ];
}
