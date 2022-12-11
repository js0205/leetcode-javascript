/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const n = tokens.length;
    const stack = new Array(Math.floor(n + 1) / 2).fill(0);
    let index = -1;
    for (let i = 0; i < n; i++) {
        const token = tokens[i];
        if (token === "+") {
            index--;
            stack[index] += stack[index + 1];
        } else if (token === "-") {
            index--;
            stack[index] -= stack[index + 1];
        } else if (token === "*") {
            index--;
            stack[index] *= stack[index + 1];
        } else if (token === "/") {
            index--;
            stack[index] /= stack[index + 1];
        }
    }
    return stack[index];
};

//时间复杂度：O(n)
//空间复杂度：O(n)