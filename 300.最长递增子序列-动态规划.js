/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    var ans = [];
    for (var i = 0; i < nums.length; i++) {
        var left = 0,
            right = ans.length;
        while (left < right) {
            var mid = left + right >>> 1;
            if (ans[mid] < nums[i]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        if (right >= ans.length) {
            ans.push(nums[i]);
        } else {
            ans[right] = nums[i];
        }
    }
    return ans.length;
};