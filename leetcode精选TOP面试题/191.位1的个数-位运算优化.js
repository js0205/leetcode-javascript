/**
 * @param {number} n-a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let ret = 0;
    while (n) {
        n &= n - 1;
        ret++;
    }
    return ret;
};
//时间复杂度：O(log n)
//空间复杂度：O(1)