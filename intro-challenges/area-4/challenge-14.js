/*
-create a variable named teamOne and assign it the value of 0
-create a  variable named teamTwo and assign it the value of 0
-create a for loop that:
  a. assign the value of 0 to variable i
  b. execute code block if i is less than arr.length
  c. i++
  -if arr[i] % 2 === 0
    assign teamOne the value of teamOne and arr[i]
    else:
    assign teamTwo the value of teamOne and arr[i]
return [teamOne, teamTwo]
*/

function solution(arr) {
  let teamOne = 0;
  let teamTwo = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      teamOne += arr[i];
    } else {
      teamTwo += arr[i];
    }
  }
  return [teamOne, teamTwo];
}

solution([50, 60, 60, 45, 70]);
