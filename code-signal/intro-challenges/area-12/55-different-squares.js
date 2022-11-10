function solution(matrix) {
  debugger;
  let counter = 0;
  const checkDuplicates = [];
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      const tempArr = Number(`${matrix[i][j]}${matrix[i][j + 1]}${matrix[i + 1][j]}${matrix[i + 1][j + 1]}`)
      if (!checkDuplicates.includes(tempArr)) {
        checkDuplicates.push(tempArr);
        counter++;
      }
    }
  }
  return counter;
}
