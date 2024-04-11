/**
 * @param {string} s
 * @return {number[]}
 */
const partitionLabels = (s) => {
  const lastIndexes = {};

  for (let i = 0; i < s.length; i++) {
    lastIndexes[s[i]] = i;
  }

  const output = [];
  let currSize = 0;
  let currLastIdx = 0;

  for (let i = 0; i < s.length; i++) {
    if (lastIndexes[s[i]] > currLastIdx) {
      currLastIdx = lastIndexes[s[i]];
    }

    currSize++;

    if (i === currLastIdx) {
      output.push(currSize);
      currSize = 0;
    }
  }

  return output;
};