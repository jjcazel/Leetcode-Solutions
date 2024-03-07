// O(n logN) time and O(n) space where n is the number of nums.length

function search(nums: number[], target: number): number {
    function binarySearch(left: number, right: number): number {
        if (left > right) return -1; // Base case: not found

        let midIdx = left + Math.floor((right - left) / 2);

        if (nums[midIdx] === target) {
            return midIdx;
        } else if (nums[midIdx] > target) {
            return binarySearch(left, midIdx - 1); // Search the left half
        } else {
            return binarySearch(midIdx + 1, right); // Search the right half
        }
    }

    return binarySearch(0, nums.length - 1);
}