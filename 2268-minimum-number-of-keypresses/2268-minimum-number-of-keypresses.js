/**
 * @param {string} s
 * @return {number}
 */

// O(1) time and O(1) space becasue the problem only deals with 26 possible letters
function minimumKeypresses(s) {
  const frequencyMap = {};

  for (let char of s) {
    if(!frequencyMap.hasOwnProperty(char)) {
        frequencyMap[char] = 0;
    }
    frequencyMap[char]++;
  }

  const freqArr = Object.values(frequencyMap).sort((a, b) => b - a);
  let minKeyPresses = 0;

  minKeyPresses += freqArr.slice(0, 9).reduce((sum, num) => sum += num);

  if (freqArr.length > 9) {
    minKeyPresses += freqArr.slice(9, 18).reduce((sum, num) => sum += num) * 2;
  }
  if (freqArr.length > 18) {
    minKeyPresses += freqArr.slice(18).reduce((sum, num) => sum += num) * 3;
  }

  return minKeyPresses;
};