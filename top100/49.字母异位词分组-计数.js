/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Object();
    for (let s of strs) {
        const count = new Array(26).fill(0);
        for (let co of s) {
            count[c.charCodeAt() - 'a', charCodeAt()]++;
        }
        map[count] ? map[count].push(s) : map[count] = [s]
    }
    return Object.values(map);
}

//时间复杂度：O(n(k+|∑|))
//空间复杂度：O(n*(k+|∑|))