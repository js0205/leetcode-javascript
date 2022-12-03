/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let nums = [];
    for (let [u, v] of intervals) {
        nums.push([u, 1]);
        nums.push([v, -1]);
    }
    nums.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]);
    let ans = 0,
        cur = 0;
    for (let [item, e] of nums) {
        cur += e;
        ans = Math.max(cur, ans);
    }
    return ans;
}

//上下车问题