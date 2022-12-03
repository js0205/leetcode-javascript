/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let res = nums[0];
    let prevMin = nums[0];
    let prevMax = nums[0];
    let temp1 = 0,
        temp2 = 0;
    for (let i = 1; i < nums.length; i++) {
        temp1 = prevMin * nums[i];
        temp2 = prevMax * nums[i];
        prevMin = Math.max(temp1, temp2, nums[i]);
        prevMax = Math.max(temp1, temp2, nums[i]);
        res = Math.max(prevMax, res);
    }
    return res;
}

//时间复杂度：O(n)
//空间复杂度：O(n)