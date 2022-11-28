/**
 * @param {number[]} nums
 * @return {void} Do not return anything,modify nums in-place instead
 */
var nextPermutation = function(nums) {
    for (let i = nums.length - 2; i >= 0; i--) {
        for (let j = nums.length - 1; j > i; j--) {
            if (nums[j] > nums[i]) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                const latterPart = nums.slice(i + 1);
                latterPart.reverse();
                nums.splice(i + 1, latterPart.length, ...latterPart)
                return
            }
        }
    }
    //如果没有更大的整数，则输出最小的整数
    nums.sort((a, b) => a - b)
}