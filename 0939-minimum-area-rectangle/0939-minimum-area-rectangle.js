/**
 * @param {number[][]} points
 * @return {number}
 */

//O(n^2) time and O(n) space where n is the number of points in the input array
const minAreaRect = (points) => {
    let pointsSet = new Set();
    for (let [x, y] of points) {
        pointsSet.add(`${x},${y}`);
    }

    let minArea = Infinity;
    for (let [x1, y1] of points) {
        for (let [x2, y2] of points) {
            if (x1 !== x2 && y1 !== y2) {
                if (pointsSet.has(`${x1},${y2}`) && pointsSet.has(`${x2},${y1}`)) {
                    let currArea = Math.abs(x2 - x1) * Math.abs(y2 - y1);
                    minArea = Math.min(currArea, minArea);
                }
            }
        }
    }

    return minArea === Infinity ? 0 : minArea;
};