/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n) time and O(1) space
function minimumSwaps(nums) {
  if (nums.length < 2) return 0;
  const maxNum = Math.max(...nums);
  const minNum = Math.min(...nums);

  const minIdx = nums.indexOf(minNum);
  const maxIdx = nums.lastIndexOf(maxNum);


  let swaps = 0;

  swaps += nums.length - maxIdx - 1;
  swaps += minIdx;

  if (minIdx > maxIdx) {
    swaps--;
  }

  return swaps;
};