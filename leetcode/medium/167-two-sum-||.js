/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;

    while(i < j) {
      const currentNum = numbers[i] + numbers[j];
      if(currentNum === target) {
        return [i + 1, j + 1];
      }
      if(currentNum < target) {
        i++;
      }
      if(currentNum > target) {
        j--;
      }
    }
};
