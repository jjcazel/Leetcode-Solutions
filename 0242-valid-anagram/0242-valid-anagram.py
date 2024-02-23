class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        hashMatch = {} # {a: 1, t: 1, r: 1}

        for idx in range(len(s)):
            char = s[idx]
            if char not in hashMatch:
                hashMatch[char] = 0
            hashMatch[char] += 1
        
        for idx2 in range(len(t)):
            char = t[idx2]
            if char not in hashMatch:
                return False
            hashMatch[char] -= 1

        for key in hashMatch:
            if hashMatch[key] != 0:
                return False
        
        return True