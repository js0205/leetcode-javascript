/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead
 */
var moveZeroes = function(nums) {
    let left = 0,
        right = 0;
    while (right < nums.length) {
        if (nums[right] !== 0) {
            swap(nums, left, right);
            left++;
        }
        right++;
    }
}

function swap(nums, l, r) {
    let temp = nums[r];
    nums[r] = nums[l];
    nums[l] = temp;
}