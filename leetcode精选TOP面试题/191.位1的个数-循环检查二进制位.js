/**
 * @param {number} n-a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let ret = 0;
    for (let i = 0; i < 32; i++) {
        if ((n & (i << i)) !== 0) {
            ret++;
        }
    }
    return ret;
};
//时间复杂度：O(k)
//空间复杂度：O(1)