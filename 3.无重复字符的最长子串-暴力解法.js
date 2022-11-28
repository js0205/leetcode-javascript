/**
 * @param {string} string
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var arr = s.split("");
  var nums = [],
    len = arr.length,
    resMax = 0,
    index = 0;
  while (index < len) {
    var max = 0;
    for (let i = 0; i < arr.length; i++) {
      if (nums.indexOf(arr[i]) == -1) {
        nums.push(arr[i]);
        max = nums.length > max ? nums.length : max;
      } else {
        nums = [];
        break;
      }
    }
    resMax = max > resMax ? max : resMax;
    arr.shift();
    index++;
  }
  return resMax;
};
