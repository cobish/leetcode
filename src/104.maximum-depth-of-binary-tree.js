
/**
 * 104.二叉树的最大深度
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/description/
 */

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// 创建一棵二叉树，返回根节点
function createTree (arr) {
  if (arr.length === 0) return null;

  var nodeList = [];
  for (var i = 0; i < arr.length; i++) {
    var node = new TreeNode(arr[i]);
    nodeList.push(node);
  }

  for (var j = 0; j < nodeList.length; j++) {
    var currNode = nodeList[j];
    var left = nodeList[2 * j + 1];
    var right = nodeList[2 * j + 2];

    if (left && currNode) {
      currNode.left = left;
    }

    if (right && currNode) {
      currNode.right = right;
    }
  }

  return nodeList[0];
}

// 先序遍历
function print (node) {
  var arr = [];

  if (node) {
    arr.push(node.val);
    arr = arr.concat(print(node.left));
    arr = arr.concat(print(node.right));
  }

  return arr;
}

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
  createTree,
  print,
  maxDepth,
  maxDepth2
};
