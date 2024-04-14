/**
 * @param {number[]} nums
 * @return {number}
 */

 // O(n) time and O(1) space where n is the length of nums
const maxProduct = (nums) => {
    let maxProduct = Math.max(...nums); 
    let currMax = 1;
    let currMin = 1; 
    
    for (const num of nums) {
        tempMax = num * currMax; 
        currMax = Math.max(num, tempMax, num * currMin); 
        currMin = Math.min(num, tempMax, num * currMin); 
        
        maxProduct = Math.max(maxProduct, currMax);
    }

    return maxProduct;
};