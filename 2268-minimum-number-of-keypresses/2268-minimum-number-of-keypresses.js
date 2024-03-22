/**
 * @param {string} s
 * @return {number}
 */

// O(1) time and O(1) space becasue the problem only deals with 26 possible letters
function minimumKeypresses(s) {
  const freqTable = {};

  for (const char of s) {
    if (!freqTable.hasOwnProperty(char)) {
      freqTable[char] = 0;
    }
    freqTable[char]++;
  }

  const frequencyArr = Object.values(freqTable).sort((a, b) => b - a);
  let numMinKeypresses = 0;

  numMinKeypresses += frequencyArr.slice(0, 9).reduce((sum, num) => sum += num);
  if (frequencyArr.length > 9) {
    numMinKeypresses += frequencyArr.slice(9, 18).reduce((sum, num) => sum += num) * 2;
  }
  if (frequencyArr.length > 18) {
    numMinKeypresses += frequencyArr.slice(18).reduce((sum, num) => sum += num) * 3;
  }

  return numMinKeypresses;
};