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


# Another solution done nearly 2 years later for warmup purposes:

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        left = 0
        right = 0
        count = 0
        longest = 0
        substring_set = set()
        for right in range(len(s)):
            if s[right] in substring_set:
                while left <= right:
                    substring_set.remove(s[left])
                    left += 1
                    count -= 1
                    if s[left - 1] == s[right]:
                        break

            substring_set.add(s[right])
            count += 1
            if count > longest:
                longest = count

        return longest


# Another solution done by AI for future reference:
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_set = set()
        left = 0
        max_length = 0

        for right in range(len(s)):
            while s[right] in char_set:
                char_set.remove(s[left])
                left += 1
            char_set.add(s[right])
            max_length = max(max_length, right - left + 1)

        return max_length
