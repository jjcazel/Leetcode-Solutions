class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        dupsSet = set()
        for num in nums:
            if num in dupsSet:
                return True
            dupsSet.add(num)
