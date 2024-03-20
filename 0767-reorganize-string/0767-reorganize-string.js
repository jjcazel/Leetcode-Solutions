/**
 * @param {string} s
 * @return {string}
 */

// O(n) time and O(n) space where n is the length of the input string
function reorganizeString(s) {
  const seenCharCounts = {}; // {a: 3, b: 1}

  for (let i = 0; i < s.length; i++) {
    const currChar = s[i];
    if (!seenCharCounts.hasOwnProperty(currChar)) {
      seenCharCounts[currChar] = 0;
    }
    seenCharCounts[currChar]++;
  }

  const charArray = Object.entries(seenCharCounts);
  console.log(Object.entries(seenCharCounts));
  charArray.sort((a, b) => b[1] - a[1]); // Sort by frequency, descending

  if (charArray[0][1] > Math.floor((s.length + 1) / 2)) {
    return ''; // Early return if the condition is not met
  }

  let evenIndex = 0, oddIndex = 1;
  const result = new Array(s.length);

  for (const [char, initialCount] of charArray) {
    let count = initialCount;
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