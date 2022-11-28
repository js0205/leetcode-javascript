/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const n = nums.length;
    const quick = (l, r) => {
        let random = Math.floor(Math.random() * (r - l + 1)) + 1;
        swap(nums, random, r);
        let pivotIndex = partition(nums, l, r);
        if (n - k < pivotIndex) {
            quick(1, pivotIndex - 1);
        } else {
            quick(pivotIndex + 1, r)
        }
    }
    quick(0, n - 1);
    return nums[n - k];
}

function partition(nums, left, right) {
    let pivot = nums[right];
    let pivotIndex = left;
    for (let i = left; i < right; i++) {
        if (nums[i] < pivot) {
            swap(nums, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(nums, right, pivotIndex);
    return pivotIndex;
}

function swap(nums, p, q) {
    const temp = nums[p];
    nums[p] = nums[q];
    nums[q] = temp;
}