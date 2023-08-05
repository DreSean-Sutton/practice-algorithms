from types import List
class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        left = 0
        right = len(nums) - 1
        resultIdx = right
        result = [0] * len(nums)

        while left <= right:
            if abs(nums[left]) > abs(nums[right]):
                result[resultIdx] = nums[left] * nums[left]
                left += 1
                resultIdx -= 1
            else:
                result[resultIdx] = nums[right] * nums[right]
                right -= 1
                resultIdx -= 1
        return result
