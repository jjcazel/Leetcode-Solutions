function LRUCache(capacity) {
    this.capacity = capacity;
    this.map = new Map(); // Use Map for O(1) access and maintaining order

    //dummy nodes
    this.head = {};
    this.tail = {};
    // Connect dummy head and tail
    this.head.next = this.tail;
    this.tail.prev = this.head;
}

// Adds a node right after the dummy head
LRUCache.prototype.addNode = function(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
}

// Removes a specific node
LRUCache.prototype.removeNode = function(node) {
    let prev = node.prev;
    let next = node.next;
    prev.next = next;
    next.prev = prev;
}

// Moves a node to the front (most recently used)
LRUCache.prototype.moveToFront = function(node) {
    this.removeNode(node);
    this.addNode(node);
}

// Removes the least recently used (LRU) item
LRUCache.prototype.popTail = function() {
    let lru = this.tail.prev;
    this.removeNode(lru);
    return lru;
}

LRUCache.prototype.get = function(key) {
    if (!this.map.has(key)) return -1;
    let node = this.map.get(key);
    this.moveToFront(node); // Mark as most recently used
    return node.value;
}

LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        let node = this.map.get(key);
        node.value = value;
        this.moveToFront(node);
    } else {
        let newNode = { key, value };
        this.map.set(key, newNode);
        this.addNode(newNode);
        if (this.map.size > this.capacity) {
            let lru = this.popTail(); // Remove LRU item
            this.map.delete(lru.key);
        }
    }
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */