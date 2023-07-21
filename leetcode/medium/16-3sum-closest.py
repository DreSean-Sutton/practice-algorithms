class Solution(object):
    def threeSumClosest(self, nums, target):
      """
      :type nums: List[int]
      :type target: int
      :rtype: int
      """
      sorted_arr = sorted(nums)
      closest_num = (2 ** 31) - 1

      for i in range(len(nums) - 2):
        left = i + 1
        right = len(nums) - 1

        while left < right:
          total = sorted_arr[i] + sorted_arr[left] + sorted_arr[right]
          if total == target:
            return total
          elif total < target:
            left += 1
          else:
            right -= 1

          if abs(total - target) < abs(closest_num - target):
            closest_num = total

      return closest_num
