/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n) time and O(n) space where n is the length of the input array
function minOperations(nums) {
  const frequenciesMap = {};

  for (const num of nums) {
    if (!frequenciesMap.hasOwnProperty(num)) {
      frequenciesMap[num] = 0;
    }
    frequenciesMap[num]++;
  }

  const frequenciesArr = Object.values(frequenciesMap);
  let numOperations = 0;

  for (const frequency of frequenciesArr) {
    if (frequency === 1) return -1;
    numOperations += calculateOptimalOperations(frequency);
  }

  return numOperations;
};

function calculateOptimalOperations(freq) {
  let operations = 0;
  while (freq > 0) {
    if (freq % 3 === 0) {
      operations += freq / 3;
      break; // Directly divisible by 3, no further action needed.
    } else if (freq % 3 === 1) {
      // Opt to subtract one and add one operation, ensuring divisibility by 3 subsequently.
      freq -= 4; // Remove 4 to divide by 2 twice, adjusting for optimal division.
      operations += 2; // Account for the removal operation and future division by 3.
    } else { // freq % 3 == 2
      freq -= 2; // Remove 2 to make it divisible by 3.
      operations += 1; // Account for this removal operation.
    }
  }
  return operations;
}