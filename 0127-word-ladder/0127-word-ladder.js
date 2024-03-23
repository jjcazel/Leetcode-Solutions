/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

//O(m * n) time and O(m * n) space where m is the length of the word and n is the length of wordList
function ladderLength(beginWord, endWord, wordList) {
  if (!endWord in wordList) return 0;
  const [queue, wordSet, seen] = [new Queue([[beginWord, 1]]), new Set(wordList), new Set([beginWord])];
  return bfs(queue, wordSet, seen, endWord);
};

function bfs(queue, wordSet, seen, endWord) {
  while (!queue.isEmpty()) {
    for (let i = (queue.size() - 1); i >= 0; i--) {
      let [word, depth] = queue.dequeue();
      if (word === endWord) return depth;

      transform(queue, wordSet, seen, word, depth);
    }
  }

  return 0;
}

function transform(queue, wordSet, seen, word, depth) {
  for (const index in word) {
    for (const char of 'abcdefghijklmnopqrstuvwxyz') {
      const neighbor = getNeighbor(word, index, char);
      if (!wordSet.has(neighbor) || seen.has(neighbor)) {
        continue;
      }
      queue.enqueue([ neighbor, (depth + 1)]);
      seen.add(neighbor);
    }
  }
}

function getNeighbor(word, index, char) {
  const neighbor = word.split('');
  neighbor[index] = char;
  return neighbor.join('');
}