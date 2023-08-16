class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        index_checker = {x: idx for idx, x in enumerate(nums2)}
        result = []
        for elem in nums1:
            current_index = index_checker.get(elem) + 1
            while(current_index <= len(nums2)):
                if current_index >= len(nums2):
                    result.append(-1)
                    break
                if nums2[current_index] > elem:
                    result.append(nums2[current_index])
                    break
                current_index += 1
        return result
