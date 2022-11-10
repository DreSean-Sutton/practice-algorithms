const solution = (bishop, pawn) => {
  let zeroBishop0 = null
  let zeroBishop1 = null
  const letterIndex = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const numberIndex = ['1', '2', '3', '4', '5', '6', '7', '8'];

  const bishop0 = letterIndex.indexOf(bishop[0]);
  const bishop1 = numberIndex.indexOf(bishop[1]);
  if (bishop0 - bishop0 !== undefined ||
    bishop1 - bishop0 !== undefined) {
    zeroBishop0 = bishop0 - bishop0;
    zeroBishop1 = bishop1 - bishop0;
  }
  else {
    zeroBishop0 = bishop0 - bishop1;
    zeroBishop1 = bishop1 - bishop1;
  }
  let i = zeroBishop0;
  let j = zeroBishop1;
  debugger;
  while (i < letterIndex.length ||
    j < numberIndex.length) {
    if (letterIndex[i] + numberIndex[j] === pawn) {
      return true;
    }
    i++;
    j++;
  }
  if (bishop0 - bishop0 !== undefined ||
    bishop1 + bishop0 !== undefined) {
    zeroBishop0 = bishop0 - bishop0;
    zeroBishop1 = bishop1 + bishop0;
  }
  else {
    zeroBishop0 = bishop0 - bishop1;
    zeroBishop1 = bishop1 + bishop1;
  }
  i = zeroBishop0;
  j = zeroBishop1;
  debugger;
  while (i < letterIndex.length ||
    j > numberIndex.length) {
    if (letterIndex[i] + numberIndex[j] === pawn) {
      return true;
    }
    i++;
    j--;
  }
  return false
}

solution('h1', 'h3');
