/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const mergedIntervals = [];

  for (let currInterval of intervals) {
    let lastInterval = mergedIntervals.length - 1; // make it explicit how I get the last interval
    const [startTime, endTime] = [0, 1]; // make it explicit what index 0 and 1 represent in this problem
    if (!mergedIntervals.length || mergedIntervals[lastInterval][endTime] < currInterval[startTime]) {
      mergedIntervals.push(currInterval);
    } else if (mergedIntervals[lastInterval][endTime] >= currInterval[startTime]) {
      mergedIntervals[lastInterval][endTime] = Math.max(currInterval[endTime], mergedIntervals[lastInterval][endTime]);
    }
  }

  return mergedIntervals;
};