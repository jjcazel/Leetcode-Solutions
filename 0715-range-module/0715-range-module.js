
function RangeModule() {
    this.intervals = [];
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {void}
 */

//O(n) time and O(n) space
RangeModule.prototype.addRange = function (left, right) {
    let newIntervals = [], merged = false;

    for (const [start, end] of this.intervals) {
        if (end < left) {
            newIntervals.push([start, end]);
        } else if (start > right) {
            if (!merged) {
                newIntervals.push([left, right]);
                merged = true;
            }
            newIntervals.push([start, end]);
        } else {
            left = Math.min(left, start);
            right = Math.max(right, end);
        }
    }

    if (!merged) {
        newIntervals.push([left, right]);
    }

    this.intervals = newIntervals;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {boolean}
 */

//O(log(n)) time and O(1) space
RangeModule.prototype.queryRange = function (left, right) {
    let low = 0, high = this.intervals.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const [start, end] = this.intervals[mid];
        if (start <= left && end >= right) {
            return true;
        } else if (end < left) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {void}
 */

//O(n) time and O(n) space
RangeModule.prototype.removeRange = function (left, right) {
    const newIntervals = [];

    for (const [start, end] of this.intervals) {
        if (start >= right || end <= left) {
            newIntervals.push([start, end]);
        } else {
            if (start < left) {
                newIntervals.push([start, left]);
            }
            if (end > right) {
                newIntervals.push([right, end]);
            }
        }
    }

    this.intervals = newIntervals;
};

/** 
 * Your RangeModule object will be instantiated and called as such:
 * var obj = new RangeModule()
 * obj.addRange(left,right)
 * var param_2 = obj.queryRange(left,right)
 * obj.removeRange(left,right)
 */