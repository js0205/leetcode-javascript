/**
 * @param {number[]} mnums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    //由于数组中同一个元素不能重复出现，所以从i的下一位开始遍历
    for (let j = i+1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
