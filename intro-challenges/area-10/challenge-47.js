function solution(str) {
  debugger;
  const myRegex = /^([\dA-F]{2}-)([\dA-F]{2}-){4}([\dA-F]{2}$)/g
  return myRegex.test(str)
}
solution('FF-FF-FF-FF-FF-FF');
