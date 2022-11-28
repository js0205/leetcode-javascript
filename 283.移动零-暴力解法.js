/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead
 */
var removeZero = function(nums) {
    var count = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            count++;
            i--;
        }
    }
    for (var j = 0; j < count; j++) {
        nums.push(0);
    }
};