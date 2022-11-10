function solution(n, m) {
  const candyPerChild = Math.floor(m / n);
  return candyPerChild * n;
}
