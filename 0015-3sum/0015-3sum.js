/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// O (n^2) and O(n) space, n = length of nums
var threeSum = function(nums) {
    nums.sort((a, b) => a - b); // Ensure correct numeric sorting
    const triplets = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates for i

        let leftPointer = i + 1;
        let rightPointer = nums.length - 1;
        while (leftPointer < rightPointer) {
            const currSum = nums[i] + nums[leftPointer] + nums[rightPointer];
            if (currSum === 0) {
                triplets.push([nums[i], nums[leftPointer], nums[rightPointer]]);
                while (nums[leftPointer] === nums[leftPointer + 1]) leftPointer++; // Skip duplicates for leftPointer
                while (nums[rightPointer] === nums[rightPointer - 1]) rightPointer--; // Skip duplicates for rightPointer
                leftPointer++;
                rightPointer--;
            } else if (currSum < 0) {
                leftPointer++;
            } else {
                rightPointer--;
            }
        }
    }
    return triplets;
};