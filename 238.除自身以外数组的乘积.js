/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const len = nums.length;
    const answer = new Array(len);
    //answer[i]表示索引，左侧所有元素的乘积
    //因为索引为'0'的元素左侧没有元素，所以answer[0]=1
    answer[0] = 1;
    for (let i = 1; i < len; i++) {
        //R为右侧没有元素的乘积
        answer[i] = nums[i - 1] * answer[i - 1];
        //R需要包含右边左右的乘积，所以计算下一个结果时需要将当前值乘到R上
        R *= nums[i];
    }
    return answer;
}

//时间复杂度：O(N)
//空间复杂度：O(1)