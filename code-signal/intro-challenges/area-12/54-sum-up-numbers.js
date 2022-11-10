/**
 * Create a storage named stringNum for string nums
 * create a storage named totalPrice for total price
 * Need a for of loop
 * check if current index is a number
 * if it isn't, add Number(stringNum) to totalPrice
 * if it is, concatonate it with stringNum
 * return totalPrice when done
 */
function solution(inputString) {
  let stringNum = '';
  let totalPrice = 0;

  for (str of inputString) {
    if (!/\d/.test(str)
      && stringNum.length === 0) {
      continue;
    } else if (!/\d/.test(str)) {
      totalPrice += Number(stringNum);
      stringNum = '';
    } else {
      stringNum += str;
    }
  }
  if (stringNum.length > 0) {
    totalPrice += Number(stringNum);
  }
  return totalPrice;
}

solution("2 apples, 12 oranges")
