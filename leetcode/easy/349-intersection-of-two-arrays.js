/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// Second better solution
var intersection = function (nums1, nums2) {
  const resultSet = new Set();
  const nums1Set = new Set([...nums1]);
  nums2.forEach(e => {
    if (nums1Set.has(e)) {
      resultSet.add(e);
    }
  })
  return [...resultSet];
};

// First solution
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
