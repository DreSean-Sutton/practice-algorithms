/*
-create a variable named codeDiff and assign it the value of null
-create a variable named numberDiff and assign it the value of null
-call the abs method of Math with 2 arguments:
a. the charCodeAt method of cell1 with 0 as it's argument and subtract it by the
b. charCodeAt method of cell2 with 0 as it's argument) and assign its value to codeDiff
-call the abs method of Math with (cell1 at index 1 - cell2 at index 1) as it's arguments and assign it's value to numberDiff
-return numberDiff % 2 is strictly equal to codeDiff % 2

*/

function solution(cell1, cell2) {
  let codeDiff = null
  let numberDiff = null
  codeDiff = Math.abs(cell1.charCodeAt(0) - cell2.charCodeAt(0));
  numberDiff = Math.abs(cell1[1] - cell2[1])
  return numberDiff % 2 === codeDiff % 2

}
