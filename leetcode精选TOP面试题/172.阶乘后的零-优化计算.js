/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let ans = 0;
    while (n !== 0) {
        n = Math.floor(n / 5);
        ans += n;
    }
    return ans;
};

//时间复杂度：O(log n)
//空间复杂度：O(1)