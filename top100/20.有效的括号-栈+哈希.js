/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const n = s.length;
    //有效字符串的长度一定为偶数
    if (n % 2 === 1) {
        return false;
    }
    //哈希表的键为右括号，值为相同类型的左括号
    const pairs = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);
    const stk = [];
    for (let ch of s) {
        if (pairs.has(ch)) {
            if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
                return false;
            }
            stk.pop();
        } else {
            stk.push(ch);
        }
    }
    return !stk.length;
}

//时间复杂度：O(n)，其中 n是字符串 s的长度
//空间复杂度：O(n+∣Σ∣),其中Σ 表示字符集，本题中字符串只包含 6种括号，∣Σ∣=6。栈中的字符数量为 O(n)，而哈希表使用的空间为O(∣Σ∣)，相加即可得到总空间复杂度