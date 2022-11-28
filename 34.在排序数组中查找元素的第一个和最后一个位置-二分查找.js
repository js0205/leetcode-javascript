/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var binaryRange = function(nums, target, lower) {
    let left = 0,
        right = nums.length - 1,
        ans = nums.length;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > target || (lower && nums[mid] >= target)) {
            right = mid - 1;
            ans = mid + 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;
}

var searchRange = function(nums, target) {
        let ans = [-1, -1];
        const leftIdx = binaryRange(nums, target, true);
        const rightIdx = binaryRange(nums, target, false) - 1;
        if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
            ans = [leftIdx, rightIdx];
        }
        return ans;
    }
    //时间复杂度：O(log n)
    //空间复杂度：O(1)