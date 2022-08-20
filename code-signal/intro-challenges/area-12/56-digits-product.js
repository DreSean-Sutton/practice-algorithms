function solution(product) {
  let tempProduct = product;
  let result = '';
  if (product === 0) {
    return 10
  }
  if (product === 1) {
    return 1;
  }
  if (product < 10) {
    return product;
  }

  while (true) {
    const isTrue = checkProduct();
    if (!isTrue &&
      tempProduct === product) {
      return -1;
    } else if (!isTrue &&
      result.length === 1) {
      return -1;
    } else if (!isTrue) {
      return Number(result.split('').reverse().join(''));
    }
  }

  function checkProduct() {
    for (let i = 9; i > 1; i--) {
      if (tempProduct % i === 0) {
        tempProduct /= i;
        result += i;
        return true;
      }
    }
    return false;
  }
}
