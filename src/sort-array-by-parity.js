/**
 * 按奇偶排序数组
 * 
 * https://leetcode-cn.com/problems/sort-array-by-parity/description/
 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  var newArr = [];

  for (var i = 0; i < A.length; i++) {
    var item = A[i];

    if (item % 2 === 0) {
      // 偶数
      newArr.unshift(item);
    } else {
      // 奇数
      newArr.push(item);
    }
  }

  return newArr;
};

/**
 * 一个指针从左往右搜，一个指针从右往左搜，
 * 当左边找到偶数，右边找到奇数时，交换两个数，
 * 然后继续查找，直到两个指针相同
 *
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity2 = function(A) {
  var i = 0;
  var j = A.length - 1;

  while (i < j) {
    while (A[i] % 2 === 0 && i <= A.length - 1) {
      // 偶数
      i++;
    }

    while (A[j] % 2 !== 0 && j >= 0) {
      // 奇数
      j--;
    }

    // 交换
    if (i < j) {
      var temp = A[i];
      A[i] = A[j];
      A[j] = temp;
    }

    i++;
    j--;
  }

  return A;
};

module.exports = {
  sortArrayByParity,
  sortArrayByParity2
};