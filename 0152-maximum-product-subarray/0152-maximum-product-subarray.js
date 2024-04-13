/**
 * @param {number[]} nums
 * @return {number}
 */

 // O(n) time and O(1) space where n is the length of nums
const maxProduct = (nums) => {
    let maxProduct = Math.max(...nums); // 0
    let currMax = 1;
    let currMin = 1; // 0
    
    for (const num of nums) {
        tempMax = num * currMax; // 0
        currMax = Math.max(num, num * currMax, num * currMin);
        currMin = Math.min(num, tempMax, num * currMin); 
        
        maxProduct = Math.max(currMax, maxProduct);
    }

    return maxProduct;
};