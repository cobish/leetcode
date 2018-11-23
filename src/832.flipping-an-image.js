/**
 * 832.翻转图像
 * https://leetcode-cn.com/problems/flipping-an-image/description/
 */

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  var newArr = [];

  for (var i = 0; i < A.length; i++) {
    var item = A[i];
    var itemArr = [];

    for (var j = item.length - 1; j >=0; j--) {
      itemArr.push(Number(!item[j]));
    }

    newArr.push(itemArr);
  }

  return newArr;
};

module.exports = flipAndInvertImage;