function solution(matrix) {
  debugger;
  var newMatrix = [];
  var mineCounter = 0;
  var rowLoopStopper = 2;
  var colLoopStopper = 2;
  var checkCurrentIIndex = 0;
  var checkCurrentJIndex = 0;
  for (let i = 0; i < matrix.length; i++) {
    var tempMatrix = [];
    for (let j = 0; j < matrix[i].length; j++) {
      for (let k = i - 1; k < rowLoopStopper; k++) {
        for (let l = j - 1; l < colLoopStopper; l++) {
          if(matrix[k] === undefined ||
          matrix[k][l] === undefined) {
            continue;
          }
          if (i + checkCurrentIIndex === k &&
          j + checkCurrentJIndex === l) {
              continue;
            }
          if (matrix[k][l]) {
            mineCounter++;
          }
        }
      }
      tempMatrix.push(mineCounter);
      mineCounter = 0;
      colLoopStopper++;
      checkCurrentJIndex++
    }
    newMatrix.push(tempMatrix);
    colLoopStopper = 0
    rowLoopStopper++;
    checkCurrentIIndex++
    checkCurrentJIndex = 0
  }
  return newMatrix;
}

solution(
[[true, false, false],
[false, true, false],
[false, false, false]]
)
