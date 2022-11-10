function solution(inputArray) {
  let largestProduct = -999;
  for (let i = 0; i < inputArray.length - 1; i++) {
    let twoNumbers = inputArray[i] * inputArray[i + 1]
    if (twoNumbers > largestProduct) {
      largestProduct = twoNumbers;
    }
  }
  return largestProduct;
}
