/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  splitS = s.split('');
  splitT = t.split('');
  for (let i = 0; i < splitS.length; i++) {
    if (splitS[i] === '#'
      && i === 0) {
      splitS.splice(i, 1);
      i--;
    } else if (splitS[i] === '#') {
      splitS.splice(i - 1, 2);
      i -= 2
    }
  }
  for (let i = 0; i < splitT.length; i++) {
    if (splitT[i] === '#'
      && i === 0) {
      splitT.splice(i, 1);
      i--;
    } else if (splitT[i] === '#') {
      splitT.splice(i - 1, 2);
      i -= 2
    }
  }
  return splitS.join('') === splitT.join('');
};
