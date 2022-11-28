/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let len = temperatures.length;
    const res = new Array(len).fill(0);
    const stack = [];
    for (let i = len - 1; i >= 0; i--) {
        while (stack.length && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
            stack.pop();
        }
        if (stack.length) {
            res[i] = stack[stack.length - 1] - i;
        }
        stack.push(i);
    }
    return res;
}