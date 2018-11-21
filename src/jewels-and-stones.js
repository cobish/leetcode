/**
 * 宝石与石头
 * 
 * https://leetcode-cn.com/problems/jewels-and-stones/description/
 */

/**
 * 暴力法，递归
 *
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  var num = 0;
  
  for (var i = 0; i < J.length; i++) {
    for (var j = 0; j < S.length; j++) {
      if (J[i] === S[j]) {
        num += 1;
      }
    }
  }
  
  return num;
};

/**
 * 哈希表
 *
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones2 = function(J, S) {
  var obj = {};
  var num = 0;
  
  for (var i = 0; i < S.length; i++) {
    var item = S[i];
    var temp = obj[item];

    if (temp) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
  }

  for (var j = 0; j < J.length; j++) {
    var jItem = J[j];
    var jTemp = obj[jItem];

    if (jTemp) {
      num += jTemp;
    }
  }
  
  return num;
};

module.exports = {
  numJewelsInStones,
  numJewelsInStones2
};