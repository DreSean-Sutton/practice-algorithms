/*
need a variable for counting the open parenthesis while iterating through the first loop
two for loops
one to check every index for a open parethesis
one for going through the index's between the parenthesis
break out of the loop if another open parethesis is found
decrement open parethesis variable if a closed perethesis is found
push each variable at index j into a variable.
reverse it and splice it back into the array
continue iterating through loop1
return arr
*/


/*
-create a variable named splitStr and assign it the value of the split method of arr
-create a variable named reverseStr and assign it the value of an empty string
-loop1
-create a for loop that:
  a. assigns the value of 0 to i
  b. executes code block if i is less than arr.length
  c. i++
  -if arr[i] is === '('
  loop2
    -create a for loop that:
      a. assigns the value of i + 1 to j
      b. executes code block if j is less than arr.length
      c. j++
      if myRegex.test(splitStr[i]) is true
        else if splitStr is strictly equal to '('
        loop3
        -create a for loop that:
          a. assign the value of 0 to k
          b. execute code block if k is less than reverseStr.length
          c. k++
          call the splice method on splitStr with i, 1, and reverseStr[k] as it's arguments
          -increment i by 1
         continue loop1
        -else
          spliceCounter = 0
          continue loop1
return the join method of splitStr with '' as it's argument
*/

function solution (str) {
  debugger;
  let splitStr = str.split('')
  let reverseStr = [];
  let myRegex = /\w/i
  loop1:
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === ')') {
      splitStr.splice(i, 1);
      i = 0;
    } else if (splitStr[i] === '(') {
      loop2:
      for (let j = i + 1; j < splitStr.length; j++) {
        if (myRegex.test(splitStr[j])) {
          reverseStr.push(splitStr[j]);
        }
        if (splitStr[j] === '(') {
          i = j - 1;
          reverseStr = [];
          continue loop1;
        } else if ((splitStr[j] === ')')) {
            reverseStr.reverse();
          for (let k = 0; k < reverseStr.length; k++) {
            splitStr.splice(i, 1, reverseStr[k]);
            i++
          }
          splitStr.splice(i, 2);
          if (!splitStr.includes('(')) {
            return splitStr.join('');
          }
          i= 0;
          reverseStr = [];
          continue loop1;
        }
      }
    }
  }
  return splitStr.join('');
}

solution("foo(bar(baz))blim")

// For inputString = "foo(bar(baz))blim", the output should be
// solution(inputString) = "foobazrabblim".
//   Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".
