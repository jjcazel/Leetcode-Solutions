/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */

// O(n + m) time and O(c) space where n is the number of words and m is the length of chars and c is the # of unique chars
function countCharacters(words, chars) {
  const charsMap = {};

  for (const char of chars) {
    charsMap[char] = (charsMap[char] || 0) + 1;
  }

  let totalLength = 0;

  words.forEach((word) => {
    const tempMap = { ...charsMap };
    let canFormWord = true;
    for (const char of word) {
      if (!tempMap[char] || tempMap[char] < 0) {
        canFormWord = false;
        break;
      }
      tempMap[char]--;
    }

    if (canFormWord) {
      totalLength += word.length;
    }
  });


  return totalLength;
}