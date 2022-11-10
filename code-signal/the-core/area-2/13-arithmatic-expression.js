function solution(a, b, c) {
  const arr = [a + b, a - b, a * b, a / b];
  return arr.some(elem => elem === c)
}
