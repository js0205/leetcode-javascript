/**
 * @param {number} n-a positive integer
 * @return {number}-a positive integer
 */
var reverseBits = function(n) {
    let rev = 0;
    for (let i = 0; i < 32 && n > 0; ++i) {
        rev |= (n & 1) << (31 - i);
        n >>>= 1;
    }
    return rev >>> 0;
};
//时间复杂度：O(log n)
//空间复杂度：O(1)