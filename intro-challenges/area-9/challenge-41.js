/*
-define a function expression named solution with n as it's parameter
  -create a variable named digitDegree and assign it the value of 0
  -create a variable named strNum and assign it
  a. the value of the toString method of n with no arguments
  -if the length property of strNum is strictly equal to 1:
    -return digitDegree
  return handleLoop with strNum as it's argument
-define a function named handleLoop with strNum as it's parameter
    digitDegree++
  -create a variable named numTotal and assign it the value of 0
  -create a for loop that:
  a. assign the value of 0 to i
  b. execute code block if i is less than strNum.length
  c. i++
    -add the value of the parseInt method of strNum at index i to numTotal
  -if numTotal is less than 10:
    -return digitDegree
  -else:
    -return handleLoop with the toString method of numTotal
*/

const solution = (n) => {

  let digitDegree = 0;
  let strNum = n.toString();
  if (strNum.length < 2) {
    return digitDegree
  }
  return handleLoop(strNum);

  function handleLoop(strNum) {
    digitDegree++;

    let numTotal = 0;
    for (let i = 0; i < strNum.length; i++) {
      numTotal += parseInt(strNum[i])
    }
    if (numTotal < 10) {
      return digitDegree;
    } else {
      return handleLoop(numTotal.toString())
    }
  }
}
