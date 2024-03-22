/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n) time and O(n) space
function minimumOperations(nums) {
  const nonZeros = nums.filter(num => num !== 0);
  const uniqueSet = new Set(nonZeros);
  return uniqueSet.size;
};
