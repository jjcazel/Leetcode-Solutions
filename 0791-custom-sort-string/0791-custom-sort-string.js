/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */

// O(n + m) time and O(n + m) space where n is the length of s and m is the length of order
const customSortString = (order, s) => {
  const output = [];
  const sCharCounts = {};

  for (const char of s) {
    sCharCounts[char] = (sCharCounts[char] || 0) + 1;
  }

  for (let i = 0; i < order.length; i++) {
    if (sCharCounts.hasOwnProperty(order[i])) {
      sCharCounts[order[i]];
      while (sCharCounts[order[i]] > 0) {
        output.push(order[i]);
        sCharCounts[order[i]]--;
      }
    }
  }

  for (const key in sCharCounts) {
    if (sCharCounts[key] > 0) {
      while (sCharCounts[key] > 0) {
        output.push(key);
        sCharCounts[key]--;
      }
    }
  }

  return output.join('');
}