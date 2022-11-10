function solution(n) {
  const arr = [];
  buildMatrix(n);
  const max = n * n + 1;
  let counter = 1;
  let rowStart = 0;
  let rowEnd = arr.length;
  let colStart = 0;
  let colEnd = arr[0].length;
  if (arr.length === 0) {
    return [0]
  }
  while (true) {
    // Right
    for (let i = colStart; i < colEnd; i++) {
      // console.log({right: counter})
      arr[rowStart][i] = counter++
      if (counter === max) return arr
    }
    colEnd--
    rowStart++
    // Down
    for (let i = rowStart; i < rowEnd; i++) {
      // console.log({down: counter})
      arr[i][colEnd] = counter++
      if (counter === max) return arr
    }
    rowEnd--
    // Left
    for (let i = colEnd - 1; i >= colStart; i--) {
      // console.log({left: counter})
      arr[rowEnd][i] = counter++
      if (counter === max) return arr
    }
    // Up
    for (let i = rowEnd - 1; i >= rowStart; i--) {
      // console.log({up: counter})
      arr[i][colStart] = counter++
      if (counter === max) return arr
    }
    colStart++
  }

  function buildMatrix(n) {
    for (let i = 0; i < n; i++) {
      const items = []
      for (let j = 0; j < n; j++) {
        items.push(0);
      }
      arr.push(items);
    }
  }
}
