/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const result = [];
  const numsMap = new Map(nums.map((value, index) => [value, index]));
  for (let [index, val] of nums.entries()) {
    const currentCompliment = numsMap.get(target - val);
    if (numsMap.has(target - val) && index !== currentCompliment) {
      result.push(index, currentCompliment);
      numsMap.delete(val);
    }
  }
  return result;
};
