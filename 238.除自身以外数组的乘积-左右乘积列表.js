/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const len = nums.length;
    //L和R分别标识左右两侧的乘积列表
    const L = new Array(len);
    const R = new Array(len);
    const answer = new Array(len);
    //L[i]为索引i左侧所有元素的乘积
    //对于索引为'0'的元素，因为左侧没有元素，所以L[0]=1
    L[0] = 1;
    for (let i = 1; i < len; i++) {
        L[i] = nums[i - 1] * L[i - 1];
    }
    //R[i]为索引i右侧所有元素的乘积
    //对于索引为'length-1'的元素，因为右侧没有元素，所以R[length-1]=1
    R[length - 1] = 1;
    for (let i = length - 2; i >= 0; i--) {
        R[i] = nums[i + 1] * R[i + 1];
    }
    //对于索引，除nums[i]以外其余各元素的乘积就是左侧所有元素的乘积乘以右侧所有元素的乘积
    for (let i = 0; i < len; i++) {
        answer[i] = L[i] * R[i];
    }
    return answer;
}

//时间复杂度：O(N)
//空间复杂度：O(N)