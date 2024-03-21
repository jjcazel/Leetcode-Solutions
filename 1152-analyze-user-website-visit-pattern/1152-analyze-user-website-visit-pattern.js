/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */

//O(nlogm+u⋅m 3) and O(n) space, with n total visits, u unique users, and m max visits per user,
function mostVisitedPattern(username, timestamp, website) {
  let userVisits = {}; /*{
                          joe: [[ 1, 'home' ], [ 2, 'about' ], [ 3, 'career' ]],
                          james: [[ 4, 'home' ], [ 5, 'cart' ], [ 6, 'maps' ], [ 7, 'home' ]],
                          mary: [[ 8, 'home' ], [ 9, 'about' ], [ 10, 'career' ]]
                        }*/

  for (let i = 0; i < username.length; i++) {
    if (!userVisits[username[i]]) {
      userVisits[username[i]] = [];
    }
    userVisits[username[i]].push([timestamp[i], website[i]]);
  }

  let patterns = new Map();

  for (const user in userVisits) {
    let visits = userVisits[user];
    visits.sort((a, b) => a[0] - b[0]);
    let uniquePatterns = new Set();

    for (let i = 0; i < visits.length; i++) {
      for (let j = i + 1; j < visits.length; j++) {
        for (let k = j + 1; k < visits.length; k++) {
          let pattern = [visits[i][1], visits[j][1], visits[k][1]].toString();
          uniquePatterns.add(pattern);
        }
      }
    }
    
    uniquePatterns.forEach(pattern => {
      if (!patterns.has(pattern)) {
        patterns.set(pattern, new Set());
      }
      patterns.get(pattern).add(user)
    });
  }

  let result = [...patterns.entries()].reduce((maxPattern, entry) => {
    let [pattern, users] = entry;
    let score = users.size;
    if (score > maxPattern.score || score === maxPattern.score && pattern < maxPattern.pattern) {
      return {pattern, score}
    }
    return maxPattern;

  }, {score: 0, pattern: ''});

  return result.pattern.split(",");
};