/**
 * @param {number} capacity
 */

function LRUCache(capacity) {
  this.capacity = capacity; // 2 
  this.cache = {}; // {1: 1, 3: 3}
  this.order = []; // [1, 3]
};

/** 
 * @param {number} key
 * @return {number}
 */
// O(n) time and O(n) space - can be optimized
LRUCache.prototype.get = function (key) {
  if (this.cache.hasOwnProperty(key)) {
    const index = this.order.indexOf(key);
    this.order.splice(index, 1);
    this.order.push(key);
    return this.cache[key];
  } else {
    return -1;
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
//O(n) time and O(n) space - can be optimized
LRUCache.prototype.put = function (key, value) {
  if (!this.cache.hasOwnProperty(key) && this.order.length === this.capacity) {
    const lruKey = this.order.shift();
    delete this.cache[lruKey];
  } else if (this.cache.hasOwnProperty(key)) {
    const index = this.order.indexOf(key);
    this.order.splice(index, 1);
  }
  this.cache[key] = value;
  this.order.push(key);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */