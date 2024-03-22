/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n^2) time and O(n) space
function minimumOperations(nums) {
  let numOperations = 0;
  let currSum = nums.reduce((sum, num) => sum + num, 0);

  while (currSum > 0) {
    let nonZeroNums = nums.filter((num) => num !== 0);
    let currMin = Math.min(...nonZeroNums);
    currSum = 0; // Reset currSum to recalculate it after the subtraction

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        nums[i] -= currMin;
      }
      currSum += nums[i]; // Recalculate currSum with updated values
    }
    numOperations++;
  }

  return numOperations;
};
