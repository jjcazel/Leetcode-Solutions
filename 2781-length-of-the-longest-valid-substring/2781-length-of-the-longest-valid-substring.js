/**
 * @param {string} word
 * @param {string[]} forbidden
 * @return {number}
 */

//O(F + N) time | O(F) space, where N is the length of the word and F is the length of the forbidden array.
function longestValidSubstring(word, forbidden) {
  const forbiddenSet = new Set(forbidden); 
  let maxLength = 0;
  let rightIdx = word.length - 1;

  for (let leftIdx = word.length - 1; leftIdx >= 0; leftIdx--) {
    for (let charIdx = leftIdx; charIdx <= Math.min(leftIdx + 9, rightIdx); charIdx++) {
      const currSubstr = word.substring(leftIdx, charIdx + 1);
      if (forbiddenSet.has(currSubstr)) {
        rightIdx = charIdx - 1;
        break;
      }
    }
    maxLength = Math.max(maxLength, rightIdx - leftIdx + 1);
  }

  return maxLength;
};

