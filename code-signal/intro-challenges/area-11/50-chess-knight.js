function solution(cell) {
  let counter = 0;
  const num = Number(cell[1]);
  let i = 0;
  let direction = 'left';
  while (i < 4) {
  const charCode = cell.charCodeAt(0);
    if (direction === 'left') {
      if (charCode - 2 >= 97) {
        if (num - 1 <= 8 &&
        num - 1 >= 1) {
          counter++
        }
        if (num + 1 <= 8 &&
        num + 1 >= 1) {
          counter++
        }
      }
      direction = 'right';
    } else if (direction === 'right') {
      if (charCode + 2 <= 104) {
        if (num - 1 <= 8 &&
        num - 1 >= 1) {
          counter++
        }
        if (num + 1 <= 8 &&
        num + 1 >= 1) {
          counter++
        }
      }
      direction = 'top';
    } else if (direction === 'top') {
      if (num + 2 <= 8) {
        if (charCode - 1 >= 97 &&
        charCode - 1 <= 104) {
          counter++
        }
        if (charCode + 1 <= 104 &&
        charCode + 1 >= 97) {
          counter++
        }
      }
      direction = 'bottom';
    } else if (direction === 'bottom') {
      if (num - 2 >= 1) {
        if (charCode - 1 >= 97 &&
        charCode - 1 <= 104) {
          counter++
        }
        if (charCode + 1 <= 104 &&
        charCode + 1 >= 97) {
          counter++
        }
      }
    }
    i++;
  }
  return counter;
}
