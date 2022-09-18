/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const result = [];
  nums1.forEach(elem => {
    if (nums2.includes(elem)) {
      result.push(elem);
    }
  })
  nums2.forEach(elem => {
    if (nums1.includes(elem)) {
      result.push(elem);
    }
  })
  return [... new Set(result)]
};
