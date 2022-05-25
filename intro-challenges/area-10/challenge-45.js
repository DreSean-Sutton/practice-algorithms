function solution(str) {
  let newStr = str
  let i = 0;
  while (newStr !== newStr.split('').reverse().join('')) {
    let value = newStr.split('')
    value.splice(newStr.length - i, 0, newStr[i])
    newStr = value.join('');
    i++
  }
  return newStr
}
