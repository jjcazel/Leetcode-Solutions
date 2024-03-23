/**
 * @param {number} size
 */
function MovingAverage(size) {
  this.size = size;
  this.queue = [];
  this.sum = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  if (this.queue.length === this.size) {
    this.sum -= this.queue.shift(); // Remove the oldest value from the sum
  }
  this.queue.push(val);
  this.sum += val; // Add the new value to the sum
  return this.sum / this.queue.length; // Compute the average
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */