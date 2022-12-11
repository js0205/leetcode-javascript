/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort((x, y) => {
        let sx = 10,
            sy = 10;
        while (sx <= x) {
            sx *= 10;
        }
        while (sy <= y) {
            sy *= 10;
        }
        return "" + (sx * y + x) - ("" + (sy * x + y));
    });
    if (nums[0] === 0) {
        return "0";
    }
    return nums.join("");
};

//时间复杂度：O(nlog n log m)
//空间复杂度：O(log n)