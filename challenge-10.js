/*
-create a variable named commonLetter and assign it the value of 0
-create a variable named lowestLength and assign it the value of null
-create a variable named greatestLength and assign it the value of null
-if s1.length is greater than s2.length
    lowestlength equals s2.slice(0)
    greatestLength equals s1.slice(0)
    else:
    lowestlength equals s1.slice(0)
    greatestLength equals s2.slice(0)
-create a for loop that:
    a. assigns the value of 0 to i
    b. execute code block if i is less than lowestLength.length
    c. i++
    -if greatestLength[i].includes lowestLength[i]
        commonLetter++
return commonLetter
*/

function solution(s1, s2) {
  debugger;
  let commonLetter = 0;
  let lowestLength;
  let greatestLength;
  if (s1.length > s2.length) {
    lowestLength = s2.slice(0)
    greatestLength = s1.slice(0)
  } else {
      lowestLength = s1.slice(0)
      greatestLength = s2.slice(0)
  }
  for (let i = 0; i < lowestLength.length; i++) {
    if (lowestLength[i].includes(greatestLength[i])) {
      commonLetter++
    }
  }
  return commonLetter;
}

solution('abcde', 'abegs');
