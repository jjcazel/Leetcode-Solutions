/**
 * @param {number[]} nums
 * @return {number}
 */

 // O(n) time and O(1) space where n is the length of nums
const maxProduct = (nums) => {
    let maxProduct = Math.max(...nums); // 4
    let currMax = 1; // 2
    let currMin = 1; // 2
    
    for (const num of nums) {
        tempMax = num * currMax; // 6
        currMax = Math.max(num, tempMax, num * currMin);
        currMin = Math.min(num, tempMax, num * currMin); 
        
        maxProduct = Math.max(currMax, maxProduct);
    }

    return maxProduct;
};