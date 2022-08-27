/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
  const combinedArr = [];
  for (let i = 0; i < difficulty.length; i++) {
    combinedArr.push({ 'difficulty': difficulty[i], 'profit': profit[i] });
  }
  const sortedArr = combinedArr.sort((a, b) => b.profit - a.profit);
  console.log(sortedArr);
  let totalProfit = 0;
  for (let i = 0; i < worker.length; i++) {
    for (let j = 0; j < sortedArr.length; j++) {
      if (worker[i] >= sortedArr[j].difficulty) {
        totalProfit += sortedArr[j].profit;
        break;
      }
    }
  }
  return totalProfit;
};
