/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let left = 0;
  let right = 0;
  const arr = [];
  while (left < nums1.length && right < nums2.length) {
    if (nums1[left] <= nums2[right]) {
      arr.push(nums1[left]);
      left++;
    } else {
      arr.push(nums2[right]);
      right++;
    }
  }
  if (right === nums2.length) {
    arr.push(...nums1.slice(left));
  }
  if (left === nums1.length) {
    arr.push(...nums2.slice(right));
  }
  if (arr.length % 2) {
    return arr[(arr.length - 1) >> 1];
  } else {
    return (arr[(arr.length - 1) >> 1] + arr[((arr.length - 1) >> 1) + 1]) / 2;
  }
};
