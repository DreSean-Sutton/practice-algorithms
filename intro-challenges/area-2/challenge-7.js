function solution(arr) {

  for (let i = 0; i < arr.length; i++) {
    let isTrue = true;
    let newArr = arr.slice(0);

    newArr.splice(i, 1);

    for (let j = 0; j < newArr.length - 1; j++) {

      if (newArr[j] < newArr[j + 1] === false) {
        isTrue = false;
        break;
      }
    }
    if (isTrue) {
      return true;
    }
  }
  return false;
}

solution([-27, -7, 0, 5, -3, 10]);



function solution(arr) {

  let fail = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      fail++;
    }

    if (fail > 1) {
      return false
    }

    if ((arr[i] <= arr[i - 2]) && (arr[i + 1] <= arr[i - 1])) {
      return false
    }
    return true
  }
}
