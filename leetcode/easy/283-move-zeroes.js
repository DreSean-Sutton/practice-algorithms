var moveZeroes = function (nums) {
  let counter = 0;
  const tempArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      i--;
      counter++;
    }
  }
  while (counter > 0) {
    nums.push(0);
    counter--;
  }
  return nums;
};


// Another cool way to do it below

var moveZeroes = function (nums) {
  let counter = nums.length
  for (let i = 0; i < counter; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
      counter--;
    }
  }
  return nums
}
