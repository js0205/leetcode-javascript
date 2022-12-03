/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let prev = intervals[0];
    let result = [];
    for (let i = 0; i < intervals.length; i++) {
        let cur = intervals[i];
        if (cur[0] > prev[1]) {
            result.push(prev);
            prev = cur;
        } else {
            prev[1] = Math.max(cur[1], prev[1]);
        }
    }
    result.push(prev);
    return result;
}