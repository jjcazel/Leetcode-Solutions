/**
 * @param {number[]} tasks
 * @return {number}
 */

// O(n) time and O(n) space where n is the number of tasks to be completed
function minimumRounds(tasks) {
  const freqMap = {};

  for (const task of tasks) {
    if (!freqMap.hasOwnProperty(task)) {
      freqMap[task] = 0;
    }
    freqMap[task]++;
  }

  const freqArr = Object.values(freqMap);
  let minRounds = 0;
  for (const freq of freqArr) {
    if (freq === 1) return -1;
    minRounds += getNumRounds(freq);
  }

  return minRounds;
};

function getNumRounds(freq) {
  let numRounds = 0;

  while (freq > 0) {
    if (freq % 3 === 0) {
      numRounds += freq / 3;
      break;
    } else if (freq % 3 === 1) {
      freq -= 4;
      numRounds += 2;
    } else {
      freq -= 2;
      numRounds += 1
    }
  }

  return numRounds;
}