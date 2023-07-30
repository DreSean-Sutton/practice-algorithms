from typing import List


class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        subarray_count = 0
        left = 0
        total = 1
        for right in range(len(nums)):
            total *= nums[right]
            if total >= k:
                while left <= right and total >= k:
                    total /= nums[left]
                    left += 1
            subarray_count += right - left + 1

        return subarray_count
