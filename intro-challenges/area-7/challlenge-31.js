/*
-create a variable named year and assign it the value of 0
-create a while loop that executes the code block if deposit is less than threshhold
  -if deposit is less than threshold:
    increment year by 1
  -deposit += deposit * (rate / 100)
-return year
*/

function solution(deposit, rate, threshold) {
  let year = 0;
  while (deposit < threshold) {
    if (deposit < threshold) {
      year++
    }
    deposit += deposit * (rate / 100);
  }
  return year;
}
