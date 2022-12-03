/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let n = s.length;
    let res = '';
    //初始化数组
    let dp = Array.from(new Array(n), () => new Array(n).fill(false));
    //循环字符串
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            //dp[i]][j]表示子串i-j是否是回文子串
            //回文子串必须满足s[i]、s[j]相等。并且向外扩展一个字符也相等，即dp[i+1][j-1]也是回文子串
            //j-1<2表示子串小于等于1也是回文串
            dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1]);
            if (dp[i][j] && j - i + 1 > res.length) {
                res = s.substring(i, j + 1);
            }
        }
    }
    return res;
}

//时间复杂度：O(n的2次方)
//空间复杂度：0(n的2次方)