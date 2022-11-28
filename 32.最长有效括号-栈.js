/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const valid = Array(s.length).fill(0);
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        }
        if (s[i] === ')' && stack.length > 0) {
            valid[i] = 1;
            valid[stack.pop()] = 1;
        }
    }
    let count = 0,
        max = 0;
    for (let v of valid) {
        v && count++;
        v || (count = 0);
        count > max && (max = count);
    }
    return max;
}

//时间复杂度：O(n)
//空间复杂度：O(n)