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
-create a variable namd preReverseStr and assign it the value of an empty array
-create a variable named reverseStr and assign it the value of an empty string
-create a variable named openParenthesisCount and assign it the value of 0
-create a variable named spliceCounter and assign it the value of 0
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
      increment spliceCounter by 1
      if splitStr[j] is not strictly equal to '(' or ')'
        call the push method of preReverseStr with splitStr[j]
        -else if splitStr[j] is strictly equal to ')' and openParenthesisCount is strictly equal to 0
        call the reverse method of preReverseStr and assign the value to reverseStr
        call the splice method on splitStr with i, spliceCount, and reverseStr as it's arguments
         continue loop1
        -else
          preReverseStr = [];
          spliceCounter = 0
          continue loop1
return the join method of splitStr with '' as it's argument
*/

function solution (arr) {
  let splitStr = arr.split('')
  let preReverseStr = [];
  let reverseStr = ''
  let openParenthesisCount = 0;
  let spliceCounter = 0;
  loop1:
  for (let i = 0; i < splitStr.length; i++) {
    if (arr[i] === '(') {
      loop2:
      for (let j = i + 1; j < splitStr.length; j++) {
        ++spliceCounter;
        if ((splitStr[j] !== '(') && (splitStr[j] !== ')')) {
          preReverseStr.push(splitStr);
        } else if ((splitStr[j] === ')') && (openParenthesisCount === 0)) {
          reverseStr = preReverseStr.reverse();
          splitStr.splice(i, spliceCounter, reverseStr)
        } else {
          preReverseStr = [];
          spliceCounter = 0;
          continue loop1;
        }
      }
    }
  }
  return splitStr.join('');
}
