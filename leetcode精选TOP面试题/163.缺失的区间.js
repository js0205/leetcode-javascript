/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    const res = [];
    nums.push(upper + 1);
    nums.unshift(lower - 1);
    for (const num of nums) {
        if (num === lower + 2) {
            res.push(`${lower + 1}`);
        } else if (num > lower + 2) {
            res.push(`${lower + 1}->${num - 1}`);
        }
        lower = num;
    }
    return res;
};