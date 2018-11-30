/**
 * 922.按奇偶排序数组 II
 * https://leetcode-cn.com/problems/sort-array-by-parity-ii/description/
 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  var left = 0;
  var right = A.length - 1;

  while (left < A.length - 1 && right > 0) {
    // 找奇数
    while (A[left] % 2 === 0 && left < A.length - 1) {
      left += 2;
    }

    // 找偶数
    while (A[right] % 2 !== 0 && right > 0) {
      right -= 2;
    }

    // 交换
    if (left < A.length - 1 && right > 0) {
      var temp = A[right];
      A[right] = A[left];
      A[left] = temp;
    }

    left += 2;
    right -= 2;
  }

  return A;
};

module.exports = sortArrayByParityII;