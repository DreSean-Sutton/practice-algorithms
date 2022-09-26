var dailyTemperatures = function (temperatures) {
  const result = temperatures.map((elem, idx) => {
    let counter = 0;
    for (let i = idx; i < temperatures.length; i++) {
      if (elem < temperatures[i]) {
        return counter;
      }
      counter++;
    }
    return 0;
  })
  return result;
}
