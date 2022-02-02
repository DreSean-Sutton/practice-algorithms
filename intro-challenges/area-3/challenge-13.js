function solution (str) {
  debugger;
  let splitStr = str.split('')
  let reverseStr = [];
  let myRegex = /\w/i
  loop1:
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === '(') {
      loop2:
      for (let j = i + 1; j < splitStr.length; j++) {
        if ((splitStr[j] !== '(') && (splitStr[j] !== ')')) {
          reverseStr.push(splitStr[j]);
        }
        if (splitStr[j] === '(') {
          i = j - 1;
          reverseStr = [];
          continue loop1;
        } else if ((splitStr[j] === ')')) {
            reverseStr.reverse();
          for (let k = 0; k < reverseStr.length; k++) {
            splitStr.splice(i, 1, reverseStr[k]);
            i++
          }
          splitStr.splice(i, 2);
          if (!splitStr.includes('(')) {
            return splitStr.join('');
          } else if (splitStr.includes('(')) {
              reverseStr = [];
              i = -1;
              continue loop1;
            }
          i= 0;
          reverseStr = [];
          continue loop1;
        }
      }
    }
  }
  return splitStr.join('');
}

solution("(foo(bar((fo)o)baz))blim")
