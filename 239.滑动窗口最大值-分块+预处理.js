/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const n = nums.length;
    const prefixMax = new Array(n).fill(0);
    const suffixMax = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        if (i % k === 0) {
            prefixMax[i] = nums[i];
        } else {
            prefixMax[i] = Math.max(prefixMax[i - 1], nums[i]);
        }
    }
    for (let i = n; i >= 0; --i) {
        if (i === n || (i + 1) % k === 0) {
            suffixMax[i] = nums[i];
        } else {
            suffixMax[i] = Math.max(suffixMax[i + 1], nums[i]);
        }
    }
    const ans = [];
    for (let i = 0; i < n - k + 1; i++) {
        ans.push(Math.max(suffixMax[i], prefixMax[i + k - 1]));
    }
    return ans;
}

//时间复杂度：O(n)，其中n是数组nums的长度
//空间复杂度：O(n)，即为存储prefixMax和suffixMax需要的空间