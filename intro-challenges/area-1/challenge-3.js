function solution(inputString) {
  let reverseStr = inputString
  .split('')
  .reverse()
  .join('');

  if (reverseStr === inputString) {
    return true;
  }
  return false;
}
