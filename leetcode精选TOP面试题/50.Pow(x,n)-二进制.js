/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    let result = 1;
    while (n) {
        if (n & 1) result *= x; //判断n的二进制最后一位是否是1， 如果是1则将结果乘以x
        x *= x;
        n >>>= 1;
    }
    return result;
};
//时间复杂度：O(log n)
//空间复杂度：O(1)