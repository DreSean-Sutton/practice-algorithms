/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const trimStr = s.trim()
  debugger;
  let lastWord = '';
  for (let i = 0; i < trimStr.length; i++) {
    if (/[a-z]/i.test(trimStr[i])) {
      lastWord += trimStr[i];
    } else {
      lastWord = '';
    }
  }
  return lastWord.length
};
