/**
 * 226.翻转二叉树
 * https://leetcode-cn.com/problems/invert-binary-tree/description/
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return [];

  if (root.left || root.right) {
    var tmp = root.left;
    root.left = root.right;
    root.right = tmp;

    if (root.left) {
      invertTree(root.left);
    }

    if (root.right) {
      invertTree(root.right);
    }
  }

  return root;
};

module.exports = invertTree;