class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        differences_dict = {} # {3: 0}

        for idx in range(len(nums)):
            curr_num = nums[idx] # 3
            difference = target - curr_num # 3
            if difference not in differences_dict:
                differences_dict[difference] = idx
            if curr_num in differences_dict and idx != differences_dict[curr_num]:
                return [differences_dict[curr_num], idx]
