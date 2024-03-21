/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */

//O(n + q) time and O(q) space where n is the length of the input string and q is the number of queries
function platesBetweenCandles(s, queries) {
  const prefixSums = new Array(s.length).fill(0);
  let count = 0; 
  for (let idx = 0; idx < s.length; idx++) {
    if (s[idx] === '*') {
      count++;
    }
    prefixSums[idx] = count;
  }

  const plateCounts = []; 
  const nearestRightCandle = new Array(s.length); 
  const nearestLeftCandle = new Array(s.length); 
  let lastLeftCandle = -1; 
  for (let idx = 0; idx < s.length; idx++) { 
    if (s[idx] === "|") {
      lastLeftCandle = idx;
    }
    nearestLeftCandle[idx] = lastLeftCandle;
  }

  let lastRightCandle = -1; 
  for (let idx = s.length - 1; idx >= 0; idx--) { 
    if (s[idx] === "|") {
      lastRightCandle = idx;
    }
    nearestRightCandle[idx] = lastRightCandle;
  }

  for (const query of queries) {
    const [left, right] = query;
    const leftCandle = nearestRightCandle[left]; 
    const rightCandle = nearestLeftCandle[right]; 
    if (leftCandle === -1 || rightCandle === -1 || leftCandle >= rightCandle) {
      plateCounts.push(0);
    } else {
      plateCounts.push(prefixSums[rightCandle] - prefixSums[leftCandle]);
    }
  }

  return plateCounts;
};


