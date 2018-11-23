/**
 * 461.汉明距离
 * https://leetcode-cn.com/problems/hamming-distance/description/
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  var num = 0;

  while (x > 0 || y > 0) {
    if ((x % 2) !== (y % 2)) {
      num++;
    }

    x = Math.floor(x / 2);
    y = Math.floor(y / 2);
  }

  return num;
};

module.exports = hammingDistance;