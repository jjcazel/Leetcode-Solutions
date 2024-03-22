/**
 * @param {number[]} height
 * @return {number}
 */

// O(n) time and O(1) space where n is the length of height array (input)
function trap(height) {
  let rainWater = 0; // 6
  let [left, right] = [0, height.length - 1];
  let [maxLeft, maxRight] = [height[0], height[height.length - 1]];

  while (left < right) {
    if (maxLeft < maxRight) {
      left++;
      maxLeft = Math.max(maxLeft, height[left]);
      rainWater += maxLeft - height[left]
    } else {
      right--;
      maxRight = Math.max(maxRight, height[right]);
      rainWater += maxRight - height[right];
    }
  }

  return rainWater;
};