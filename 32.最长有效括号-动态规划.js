/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const dp = Array(s.length).fill(0);
    for (let i = 1; i < s.length; i++) {
        if (s[i] === ')') {
            if (i - dp[i - 1] - 1 >= 0 && s[i - dp[i - 1] - 1] === '(') {
                dp[i] = dp[i - 1] + 2;
                if (i - dp[i - 1] - 2 > 0) {
                    dp[i] += dp[i - dp[i - 1] - 2];
                }
            }
        }
    }
    return Math.max(...dp, 0);
}

//时间复杂度：O(n)
//空间复杂度：O(n)