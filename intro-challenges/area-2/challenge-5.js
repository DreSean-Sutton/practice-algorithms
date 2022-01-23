function solution(n) {
  let answer = 1
  for (let i = 0; i < n; i++) {
    answer += 4 * i;
  }
  return answer;
}

//BETTER SOLUTION BELOW

function solution(n) {
  return n * n + (n - 1) * (n - 1);
}
