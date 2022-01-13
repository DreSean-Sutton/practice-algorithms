function solution(n) {
  let answer = 1
  for (let i = 0; i < n; i++) {
    answer += 4 * i;
  }
  return answer;
}
