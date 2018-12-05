/**
 * 二叉树
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
    if (arr[i]) {
      var node = new TreeNode(arr[i]);
      nodeList.push(node);
    } else {
      nodeList.push(null);
    }
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
function printTree (node) {
  var arr = [];

  if (node) {
    arr.push(node.val);

    if (node.left || node.right) {
      arr = arr.concat(printTree(node.left));
    }
    if (node.right) {
      arr = arr.concat(printTree(node.right));
    }
  } else {
    arr.push(node);
  }

  return arr;
}

module.exports = {
  TreeNode,
  createTree,
  printTree
};