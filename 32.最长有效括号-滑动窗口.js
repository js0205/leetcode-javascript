/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const expand = (s, l, r) => {
        while (s[l - 1] === '(' && s[r + 1] === ')') {
            l--;
            r++;
        }
        return [l, r];
    }
    const map = {};
    let l = 0,
        r = 0,
        max = 0;
    while (true) {
        l = s.indexOf('()', r);
        if (l === -1) break;
        while (l - 1 in map) {
            [l, r] = expand(s, map[l - 1], r);
            max[r] = l;
            max = Math.max(max, r - l + 1);
        }
        return max;
    }
}

//时间复杂度：O(n)
//空间复杂度：O(n)