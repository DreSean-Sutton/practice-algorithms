function solution(matrix) {
  debugger;
  let cost = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        for (let k = 0; k < matrix.length; k++) {
          matrix[k].splice(j, 1, 0);
        }
      } else {
        cost += matrix[i][j];
      }
    }
  }
  return cost;
}

// INTERESTING SOLUTION BELOW (Not mine)

function solution(matrix) {
  for (var r = 0, j = 0; j < matrix[0].length; j++) {
    for (var i = 0; i < matrix.length; i++) {
      if (matrix[i][j] === 0) break
      else r += matrix[i][j]
    }
  }
  return r
}
