/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 // O(n) time and O(n) space where n is the length of the input nums array
function twoSum(nums, target) {
    const numsSeen = {};
    for (let idx = 0; idx < nums.length; idx++) { 
      const currNum = nums[idx];
      const diff = target - currNum;
      if (diff in numsSeen) {
        return [numsSeen[diff], idx];
      }
      numsSeen[currNum] = idx;
    }
};