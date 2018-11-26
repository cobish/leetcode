/**
 * 657.机器人能否返回原点
 * https://leetcode-cn.com/problems/robot-return-to-origin/description/
 */

/**
 * if else 判断
 * 
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  var zero = 0;
  var x = zero;
  var y = zero;
  
  for (var i = 0; i < moves.length; i++) {
    var item = moves[i];
    
    if (item === 'R') {
      x++;
    } else if (item === 'L') {
      x--;
    } else if (item === 'U') {
      y++;   
    } else if (item === 'D') {
      y--;
    }
  }
  
  if (x === zero && y === zero) {
    return true;
  }
  
  return false;
};

/**
 * 哈希表
 * 
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle2 = function(moves) {
  var hashMap = {
      'L': 0,
      'R': 0,
      'U': 0,
      'D': 0
  };
  
  for (var i = 0; i < moves.length; i++) {
      var item = moves[i];
      hashMap[item] += 1;
  }
  
  if (hashMap['L'] === hashMap['R'] && hashMap['U'] === hashMap['D']) {
      return true;
  }
  
  return false;
};

module.exports = {
  judgeCircle,
  judgeCircle2
};