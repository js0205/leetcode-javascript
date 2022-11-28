/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    for (let str of strs) {
        let array = Array.from(str);
        array.sort();
        let key = array.toString();
        let list = map.get(key) ? map.set(key) : new Array();
        list.push(key, list);
        map.set(key, list);
    }
    return Array.from(map.values())
}


//时间复杂度：O(nk log k)
//空间复杂度：O(nk)