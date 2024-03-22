/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n) time and O(n) space where n is the length of the input array
//https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/description/ (similar)

function minOperations(nums) {
  const freqMap = {}

  for (const num of nums) {
    if(!freqMap.hasOwnProperty(num)) {
      freqMap[num] = 0;
    }
    freqMap[num]++;
  }

  const freqArr = Object.values(freqMap);
  let minOperations = 0;

  for (const freq of freqArr) {
    if (freq === 1) return -1;
    minOperations += getNumOperations(freq);
  }

  return minOperations;
};

function getNumOperations(freq) {
  let operations = 0;

  while (freq > 0) {
    if (freq % 3 === 0) {
      operations += freq / 3;
      break;
    } else if (freq % 3 === 1) {
      freq -= 4;
      operations += 2
    } else {
      freq -= 2
      operations += 1
    }
  }

  return operations;
}