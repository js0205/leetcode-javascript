/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let len = temperatures.length;
    const res = new Array(len).fill(0);
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (temperatures[j] > temperatures[i]) {
                res[i] = j - i;
                break;
            }
        }
    }
    return res;
}