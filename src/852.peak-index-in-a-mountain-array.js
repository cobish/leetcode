/**
 * 852.山脉数组的峰顶索引
 * https://leetcode-cn.com/problems/peak-index-in-a-mountain-array/description/
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  var len = A.length;
  if (len < 3) return 0;

  var left = 0;
  var right = len - 1;

  for (var i = 1; i < len; i++) {
    if (A[i - 1] < A[i]) {
      left++;
    } else {
      break;
    }
  }

  for (var j = len - 1; j > 0; j--) {
    if (A[j] < A[j - 1]) {
      right--;
    } else {
      break;
    }
  }

  if (left === right) {
    return left;
  }

  return 0;
};

module.exports = peakIndexInMountainArray;