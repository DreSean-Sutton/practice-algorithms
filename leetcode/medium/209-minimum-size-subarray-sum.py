from typing import List
class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        result = 0
        windowStart = 0
        subarray_sum = 0
        windowEnd = 0
        while windowEnd < len(nums):
            if result == 1:
                return result
            subarray_sum += nums[windowEnd]
            if subarray_sum >= target:
                current_length = windowEnd - windowStart + 1
                result = result if result < current_length and result != 0 else current_length
                subarray_sum -= nums[windowStart]
                subarray_sum -= nums[windowEnd]
                windowStart += 1
            else:
                windowEnd += 1

        return result
