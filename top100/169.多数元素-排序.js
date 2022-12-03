/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
        nums.sort((a, b) => a - b);
        return nums[Math.floor(nums.length / 2)];
    }
    //时间复杂度：O(nlog n)
    //空间复杂度：O(log n)