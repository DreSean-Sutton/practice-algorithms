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
    -if greatestLength.includes lowestLength[i]
      call the replace method of greatestLength at lowestLength[i] with an empty string and assign that value to greatestLength
      commonLetter++
return commonLetter
*/

function solution(s1, s2) {
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
    if (greatestLength.includes(lowestLength[i])) {
      greatestLength = greatestLength.replace(lowestLength[i], '');
      commonLetter++
    }
  }
  return commonLetter;
}

// BETTER SOLUTION BELOW. FINDING THE GREATEST/LOWEST LENGTH WASN'T NEEDED

function solution(s1, s2) {
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s2.indexOf(s1[i]) != -1) {
      count++;
      s2 = s2.replace(s1[i], '');
    }
  }
  return count;
}
