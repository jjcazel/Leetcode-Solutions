class Solution(object):
    def rob(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        # O(2^n) time | O(2^n) space
        # if len(nums) == 1: #
        #     return nums[0]
        # if len(nums) == 2:
        #     return max(nums[0], nums[1])
        
        # return max((nums[0] + self.rob(nums[2:])), self.rob(nums[1:]))

        #O(n) time | O(n) space
        rob_house = 0
        skip_house = 0

        for house in nums:
            rob_house, skip_house =  max((house + skip_house), rob_house), rob_house

        return rob_house
