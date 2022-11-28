/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead
 */
var sortColors = function(nums) {
    let len = nums.length,
        cur = 0,
        p0 = 0,
        p1 = len - 1;
    while (cur <= p1) {
        function swap(a, b) {
            let temp = nums[a];
            nums[a] = nums[b];
            nums[b] = temp;
        }
        if (nums[cur] === 0) {
            swap(cur, p0);
            cur++;
            p0++;
        } else if (nums[cur] === 2) {
            swap(cur, p1);
            p1--;
        } else {
            cur++;
        }
    }
}