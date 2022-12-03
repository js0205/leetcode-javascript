/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    if (isSorted(nums)) {
        return 0;
    }
    const numsSorted = [...nums].sort((a, b) => a - b);
    let left = 0;
    while (nums[left] === numsSorted[left]) {
        right--;
    }
    return right - left + 1;
}
const isSorted = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            return false;
        }
    }
    return true;
}

//时间复杂度：O(n log n)
//空间复杂度：O(n)