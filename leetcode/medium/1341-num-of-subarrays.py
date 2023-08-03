from typing import List
class Solution:
    def numOfSubarrays(self, arr: List[int], k: int, threshold: int) -> int:
        result = 0
        start = 0
        subarray_sum = 0
        for end in range(len(arr)):
            subarray_sum += arr[end]
            if end - start + 1 == k:
                if subarray_sum / k >= threshold:
                    result += 1
                subarray_sum -= arr[start]
                start += 1

        return result
