/**
 * 804.唯一摩尔斯密码词
 * https://leetcode-cn.com/problems/unique-morse-code-words/description/
 */

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  var morseArr = ['.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..'];
  var num = 0;
  var hashMap = {};

  var baseCharCode = 'a'.charCodeAt();

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var wordMorse = '';

    for (var j = 0; j < word.length; j++) {
      var item = word[j];
      var index = item.charCodeAt() - baseCharCode;
      wordMorse += morseArr[index];
    }

    if (!hashMap[wordMorse]) {
      num ++;
      hashMap[wordMorse] = true;
    }
  }

  return num;
};

module.exports = uniqueMorseRepresentations;