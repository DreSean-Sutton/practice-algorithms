class Solution(object):
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        result = set()
        sorted_arr = sorted(nums)
        for i in range(len(nums) - 2):
            left = i + 1
            right = len(sorted_arr) - 1

            while (left < right):
                total = sorted_arr[i] + sorted_arr[left] + sorted_arr[right]
                if total == 0:
                    result.add((sorted_arr[i], sorted_arr[left], sorted_arr[right]))
                    left += 1
                    right -= 1
                elif total < 0:
                    left += 1
                else:
                    right -= 1
        return list(result)
