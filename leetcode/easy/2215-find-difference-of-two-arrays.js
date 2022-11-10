/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = function (nums1, nums2) {

  const tempNum1 = [... new Set(nums1)]; // Removes duplicates from arrays
  const tempNum2 = [... new Set(nums2)]; // Removes duplicates from arrays
  const tempArr1 = [];
  const tempArr2 = [];
  const result = [];
  tempNum1.forEach(elem => {
    if (!nums2.includes(elem)) {
      tempArr1.push(elem);
    }
  })
  tempNum2.forEach(elem => {
    if (!nums1.includes(elem)) {
      tempArr2.push(elem);
    }
  })
  result.push(tempArr1, tempArr2);
  return result;
};
