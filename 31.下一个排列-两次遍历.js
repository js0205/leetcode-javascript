/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let len = nums.length;
    if (len <= 1) {
        return;
    }
    let low;
    for (let i = len - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            low = i;
            break;
        }
        if (i === 0) {
            return nums.reverse();
        }
    }
    for (let j = len - 1; j > low; j--) {
        if (nums[j] > nums[low]) {
            let gent = nums[j];
            nums[j] = nums[low];
            nums[low] = gent;
            let client = nums.splice(low + 1);
            client.reverse();
            nums.push(...client);
            return;
        }
    }
}