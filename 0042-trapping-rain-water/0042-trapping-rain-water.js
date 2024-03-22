/**
 * @param {number[]} height
 * @return {number}
 */

// O(n) time and O(n) space where n is the length of height array (input)
function trap(height) {
  let rainWater = 0; // 6

  let rightMaxes = new Array(height.length);
  let leftMaxes = new Array(height.length);
  let minAmounts = new Array(height.length);

  let currMax = height[0];
  for (let i = 0; i < height.length; i++) {
    leftMaxes[i] = currMax;
    if (height[i] > currMax) {
      currMax = height[i];
    }
  }

  currMax = height[height.length - 1];
  for (let j = height.length - 1; j >= 0; j--) {
    rightMaxes[j] = currMax;
    if (height[j] > currMax) {
      currMax = height[j];
    }
  }

  for (let k = 0; k < rightMaxes.length; k++) {
    if (Math.min(rightMaxes[k], leftMaxes[k]) - height[k] > 0) {
      rainWater += Math.min(rightMaxes[k], leftMaxes[k]) - height[k];
    }
  }

  return rainWater;
};