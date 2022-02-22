/*
-create a for loop that:
a. assigns the value of 0 to i
b. executes the code block if i is less than str.length
c. i++
  -if i is strictly equal to 0 and:
  the test method of /\d/ with str[i] as it's argument is true:
    -return false
  -if the test method of /\w/ with str[i] as it's argument is not true:
    -return false
-return true
*/

const solution = (str) => {
  debugger;
  for (let i = 0; i < str.length; i++) {
    if (i === 0 &&
      /\d/.test(str[i])) {
      return false;
    }
    if (!(/\w/.test(str[i]))) {
      return false
    }
  }
  return true
}
