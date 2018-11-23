/**
 * 709.转换成小写字母
 * https://leetcode-cn.com/problems/to-lower-case/description/
 */

/**
 * hash 表
 *
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    var hashMap = {
      'A': 'a',
      'B': 'b',
      'C': 'c',
      'D': 'd',
      'E': 'e',
      'F': 'f',
      'G': 'g',
      'H': 'h',
      'I': 'i',
      'J': 'j',
      'K': 'k',
      'L': 'l',
      'M': 'm',
      'N': 'n',
      'O': 'o',
      'P': 'p',
      'Q': 'q',
      'R': 'r',
      'S': 's',
      'T': 't',
      'U': 'u',
      'V': 'v',
      'W': 'w',
      'X': 'x',
      'Y': 'y',
      'Z': 'z'
    };

    var newStr = '';

    for (var i = 0; i < str.length; i++) {
      var item = str[i];
      if (hashMap[item]) {
        item = hashMap[item];
      }

      newStr += item;
    }

    return newStr;
};

/**
 * Ascii 码转换
 *
 * @param {string} str
 * @return {string}
 */
var toLowerCase2 = function(str) {
  var newStr = '';

  for (var i = 0; i < str.length; i++) {
    var item = str[i];
    var charCode = item.charCodeAt();

    // A-Z 对应 65-90
    if (charCode >= 65 && charCode <= 90) {
      charCode += 32;
      item = String.fromCharCode(charCode);
    }

    newStr += item;
  }

  return newStr;
};

/**
 * 正则 + Ascii 码转换
 *
 * @param {string} str
 * @return {string}
 */
var toLowerCase3 = function(str) {
  return str.replace(/[A-Z]/g, function (item) {
    var charCode = item.charCodeAt();
    charCode += 32;
    return String.fromCharCode(charCode);
  });
};

module.exports = {
  toLowerCase,
  toLowerCase2,
  toLowerCase3
};