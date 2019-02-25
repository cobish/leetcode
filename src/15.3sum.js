/**
 * 15.三数之和
 * https://leetcode-cn.com/problems/3sum/
 */

var threeSum = function(nums) {
  var arr = [];
  var length = nums.length;
  
  if (length < 3) {
    return arr;
  }
  
  // 排序
  nums.sort(function (a, b) {
    return a - b;
  });
  
  var zero;
  var first = 0, third = length - 1;
  
  // 找到 0 附近的位置
  for (var i = first + 1; i < length; i++) {
    if (nums[i] >= 0) {
      zero = i;
      break;
    }
  }
  
  // noprotect
  while (first <= zero && first + 2 <= third) {
    
    while (third >= zero && first + 2 <= third) {
      var res = nums[first] + nums[third];
      
      // 二分法找 res
      var left = first, right = third;
      var center = Math.floor((left + right) / 2);
      
      while (nums[center] !== -res && left !== center && right !== center) {
        if (nums[center] > -res) {
          right = center;
        } else {
          left = center;
        }
        
        center = Math.floor((left + right) / 2);
      }
      
      if (left !== center && right !== center) {
        arr.push([nums[first], nums[center], nums[third]]); 
      }
      
      third -= 1;
    }
    
    first += 1;
    third = length - 1;
  }
  
  // 去重
  var hashMap = {};
  arr = arr.filter(function (item, index, array) {
    var str = item.join();
    if (!hashMap[str]) {
      hashMap[str] = true;
      return true;
    }
    
    return false;
  });
  
  
  return arr;
};
