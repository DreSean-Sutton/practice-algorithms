function solution(time) {
  const myRegex = /^([0-1]\d|2[0-3]):[0-5][0-9]/g
  return myRegex.test(time)
}
