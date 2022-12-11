/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    const M1 = 0x55555555;
    const M2 = 0x33333333;
    const M4 = 0x0f0f0f0f;
    const M8 = 0x00ff00ff;

    n = ((n >>> 1) & M1) | ((n & M1) << 1);
    n = ((n >>> 2) & M2) | ((n & M2) << 2);
    n = ((n >>> 4) & M4) | ((n & M4) << 4);
    n = ((n >>> 8) & M8) | ((n & M8) << 8);
    return ((n >>> 16) | (n << 16)) >>> 0;
};
//时间复杂度:O(1)
//空间复杂度:O(1)