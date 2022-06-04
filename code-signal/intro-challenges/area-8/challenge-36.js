/*
-create a variable named checkDuplicates and assign it the value of an emptry array literal
-call the split method of str with ('') as it's argument and assign it's value to splitStr
-call the forEach method of splitStr with element as it's argument
  -if the includes method of checkDuplicates with element as it's argument is false:
  -call the push method of checkDuplicates with element as it's argument
-return checkDuplicates.length
*/

function solution(str) {
  const checkDuplicates = [];
  splitStr = str.split('')
  splitStr.forEach((element) => {
    if (!checkDuplicates.includes(element)) {
      checkDuplicates.push(element);
    }
  })
  return checkDuplicates.length
}
