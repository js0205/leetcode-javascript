/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.max = capacity;
    this.map = new Map();
};
/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map.has(key)) {
        let value = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, value);
        return value;
    } else {
        return -1;
    }
};
/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        this.map.delete(key);
    }
    this.map.set(key, value);
    if (this.map.size > this.max) {
        this.map.delete(this.map.keys().next().value)
    }
};
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 v= obj.get(key)
 * obj.put(key,value)
 */