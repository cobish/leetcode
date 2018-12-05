/**
 * 617.合并二叉树
 * https://leetcode-cn.com/problems/merge-two-binary-trees/description/
 */
const { TreeNode } = require('./utils/binaryTree.js');

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  if (!t1 && !t2) return null;
  if (!t1 && t2) return t2;
  if (t1 && !t2) return t1;

  t1.val += t2.val;

  if (!t1.left && t2.left) {
    t1.left = new TreeNode(0);
  }
  if (!t1.right && t2.right) {
    t1.right = new TreeNode(0);
  }

  if (t1.left && t2.left) {
    mergeTrees(t1.left, t2.left);
  }
  if (t1.right && t2.right) {
    mergeTrees(t1.right, t2.right);
  }

  return t1;
};

module.exports = mergeTrees;