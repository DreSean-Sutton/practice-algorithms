/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let subarrayCount = 0;
    let left = 0;
    let total = 1;
    for(let right = 0; right < nums.length; right++) {
        total *= nums[right];
        if(total >= k) {
            while(left <= right && total >= k) {
                total /= nums[left];
                left++;
            }
        }
        subarrayCount += right - left + 1;
    }
    return subarrayCount;
};
