/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length <= 0) { //边界条件
        return s;
    }
    let start = 0; //最长回文子串开始的索引
    let maxLength = 1; //初始化最大回文子串长度
    function h(left, right) {
        //当s[left]和s[right]相等时，不断向外扩展回文字符串的长度
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLength) {
                maxLength = right - left + 1;
                start = left;
            }
            left--;
            right++;
        }
    }
    for (let i = 0; i < s.length; i++) {
        h(i - 1, i + 1);
        h(i, i + 1);
    }
    return s.substring(start, start + maxLength);
}

//时间复杂度：O(n的2次方)
//空间复杂度：O(1)