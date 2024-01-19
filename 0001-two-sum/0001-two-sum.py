class Solution:
# O(n) time and O(n) space where n is the length of the nums list 
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        differences_dict = {} # {3: 0}

        for idx in range(len(nums)):
            curr_num = nums[idx] # 3
            difference = target - curr_num # 3
            if curr_num in differences_dict:
                return [differences_dict[curr_num], idx]
            differences_dict[difference] = idx