/**
 * 344.反转字符串
 * https://leetcode-cn.com/problems/reverse-string/description/
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  var str = '';

  for (var i = s.length - 1; i >= 0; i--) {
    str += s[i];
  }

  return str;
};

module.exports = reverseString;