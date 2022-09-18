/**
 * @param {string} p
 * @return {number}
 */

// WORKS, BUT TIME EXCEEDED

const findSubstringInWraproundString = function (p) {
  let resultArr = [];
  const splitP = p.split('');
  for (let i = 0; i < splitP.length; i++) {
    startChecker = 0;
    endChecker = 1;
    tempStr = p[i];
    if (!resultArr.includes(splitP[i])) {
      resultArr.push(splitP[i]);
    }
    while (true) {
      if (p.charCodeAt(i + startChecker) + 1 === p.charCodeAt(i + endChecker)
        || p.charCodeAt(i + startChecker) - 25 === p.charCodeAt(i + endChecker)) {
        tempStr += p[i + endChecker];
        if (!resultArr.includes(tempStr)) {
          resultArr.push(tempStr);
        }
      } else {
        break;
      }
      startChecker++;
      endChecker++;
    }
  }
  console.log(resultArr);
  return resultArr.length
};
