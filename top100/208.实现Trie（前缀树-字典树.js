var Trie = function() {
    this.children = {}
};
/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.children;
    for (const ch of word) {
        if (!node[ch]) {
            node[ch] = {};
        }
        node = node[ch];
    }
    node.isEnd = true;
};
/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.searchPrefix = function(prefix) {
    let node = this.children;
    for (const ch of prefix) {
        if (!node[ch]) {
            return false;
        }
        node = node[ch];
    }
    return node;
}
Trie.prototype.search = function(word) {
    const node = this.searchPrefix(word);
    return node !== undefined && node.isEnd !== undefined;
};
/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.searchPrefix(prefix);
};
/**
 * Your Trie object will bw instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2=obj.search(word)
 * var param_3=obj.startsWith(prefix)
 */

//时间复杂度：初始化为O(1)，其余操作为O(|S|)，其中|S|是每次插入或查询的字符串的长度
//空间复杂度：O(|T|*∑)，其中|T|为所有插入字符串的长度之和，∑为字符集的大小