/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let focusedNums;
  let testIncludesNums;
  const result = [];
  if (nums1.length < nums2.length) {
    focusedNums = nums1;
    testIncludesNums = nums2
  } else {
    focusedNums = nums2;
    testIncludesNums = nums1
  }
  focusedNums.forEach(elem => {
    let testIndex = testIncludesNums.indexOf(elem);
    if (testIndex !== -1) {
      result.push(elem);
      testIncludesNums.splice(testIndex, 1);
    }
  })
  return result;
};
