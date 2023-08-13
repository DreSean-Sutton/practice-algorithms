class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        result = 0
        includes_checker = set()
        left = 0
        right = 0
        if(len(s) < 2):
            return len(s)
        for right in range(len(s)):
            if s[right] in includes_checker:
                while left < right:
                    if s[left] == s[right]:
                        left += 1
                        break
                    else:
                        includes_checker.discard(s[left])
                        left += 1
            includes_checker.add(s[right])
            result = max(result, right - left + 1)
            right += 1
        return result
