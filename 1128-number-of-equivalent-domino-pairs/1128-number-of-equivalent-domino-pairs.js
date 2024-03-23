/**
 * @param {number[][]} dominoes
 * @return {number}
 */

// O(n) time and O(n) space where n is the number of dominoes
function numEquivDominoPairs(dominoes) {
    const freqs = {};

    for (const domino of dominoes) {
      const currDom = domino.sort().toString();
      if (!freqs.hasOwnProperty(currDom)) {
        freqs[currDom] = 0;
      }

      freqs[currDom]++;
    }

    const minPairs = Object.values(freqs).reduce((sum, freq) => {
      return sum + (freq * (freq - 1)) / 2;
    }, 0);

    return minPairs;
};