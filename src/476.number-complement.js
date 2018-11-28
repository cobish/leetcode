/**
 * 476.数字的补数
 * https://leetcode-cn.com/problems/number-complement/description/
 */

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  var n = 0;
  var newNum = 0;

  while (num > 0) {
    newNum += Number(!(num % 2)) * Math.pow(2, n);
    num = Math.floor(num / 2);
    n += 1;
  }

  return newNum;
};

module.exports = findComplement;