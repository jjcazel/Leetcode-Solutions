/**
 * @param {string} s
 * @return {string}
 */

// O(n) time and O(n) space where n is the length of the input string
function reorganizeString(s) {
  const seenCharCounts = {};

  for (const char of s) {
    if (!seenCharCounts.hasOwnProperty(char)) {
      seenCharCounts[char] = 0;
    }
    seenCharCounts[char]++;
  }

  const charArray = Object.entries(seenCharCounts);
  charArray.sort((a, b) => b[1] - a[1]); // Sort by frequency, descending
  if (charArray[0][1] > Math.floor((s.length + 1) / 2)) {
    return '';
  }

  let evenIndex = 0, oddIndex = 1;
  const result = new Array(s.length);

  for (const [char, frequency] of charArray) {
    let count = frequency;
    while (count > 0) {
      if (evenIndex < s.length) {
        result[evenIndex] = char;
        evenIndex += 2;
      } else if (oddIndex < s.length) {
        result[oddIndex] = char;
        oddIndex += 2;
      }
      count--;
    }
  }

  return result.join('');
};