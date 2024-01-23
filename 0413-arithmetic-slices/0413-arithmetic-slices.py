class Solution:
    def numberOfArithmeticSlices(self, nums: List[int]) -> int:
        arithmetic_subarrays_count = 0
        
        for i in range(1, len(nums)):
            j = i
            while j < len(nums) - 1 and nums[j] - nums[j + 1] == nums[j - 1] - nums[j]:
                arithmetic_subarrays_count += 1
                j += 1
    
        return arithmetic_subarrays_count

        '''
        [1,2,3,4,6,8,10]

        nested loops to check all subarray sizes with same diff
        inner loop continues while same diff
        keep count of all arithmetic subarrys
        '''