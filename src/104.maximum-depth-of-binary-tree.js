
/**
 * 104.二叉树的最大深度
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/description/
 */

/**
 * 递归
 * 
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  var left = 0;
  var right = 0;
  
  if (root === null) {
      return 0;
  }
  
  if (root.left) {
      left = maxDepth(root.left);
  }
  
  if (root.right) {
      right = maxDepth(root.right);
  }
  
  return Math.max(left, right) + 1;
};

/**
 * 使用队列
 * 
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth2 = function (root) {
  var stack = [];
  var deep = 0;

  if (root === null) {
    return 0;
  }

  stack.push(root);

  while (stack.length > 0) {
    deep += 1;

    var length = stack.length;
    for (var i = 0; i < length; i++) {
      var node = stack.shift();

      if (node) {
        if (node.left) {
          stack.push(node.left);
        }

        if (node.right) {
          stack.push(node.right);
        }
      }
    }
  }

  return deep;
};
 
module.exports = {
  maxDepth,
  maxDepth2
};
