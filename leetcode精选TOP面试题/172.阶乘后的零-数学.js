/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let ans = 0;
    for (let i = 5; i <= n; i += 5) {
        for (let x = i; x % 5 == 0; x /= 5) {
            ++ans;
        }
    }
    return ans;
};
//时间复杂度：O(n)
//空间复杂度：O(1)