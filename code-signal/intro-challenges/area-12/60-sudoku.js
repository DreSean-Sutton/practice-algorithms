function solution(grid) {
  const num = new Map();
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  numbers.forEach(elem => {
    num.set(elem, elem)
  })
  let result = null;
  result = checkHorizontal();
  if (!result) return false;
  result = checkVertical();
  if (!result) return false;
  result = checkThreeByThree();
  return result;

  function checkHorizontal() {
    for (let i = 0; i < grid.length; i++) {
      let tempNum = new Map(num)
      for (let j = 0; j < grid[i].length; j++) {
        tempNum.delete(grid[i][j])
      }
      if (tempNum.size !== 0) return false;
    }
    return true;
  }

  function checkVertical() {
    for (let i = 0; i < grid.length; i++) {
      let tempNum = new Map(num)
      for (let j = 0; j < grid[i].length; j++) {
        tempNum.delete(grid[j][i])
      }
      if (tempNum.size !== 0) return false;
    }
    return true;
  }

  function checkThreeByThree() {
    let rowEnd = 3;
    while (rowEnd <= 9) {
      const result = loopThroughSquares();
      if (!result) return false
      rowEnd += 3
    }

    function loopThroughSquares() {
      let squareIndex = 0;
      let colEnd = 3;
      while (squareIndex < 3) {
        let tempNum = new Map(num);
        for (let i = rowEnd - 3; i < rowEnd; i++) {
          for (let j = colEnd - 3; j < colEnd; j++) {
            tempNum.delete(grid[i][j])
          }
        }
        if (tempNum.size !== 0) return false;
        squareIndex++;
        colEnd += 3
      }
      return true;
    }
    return true
  }
}
