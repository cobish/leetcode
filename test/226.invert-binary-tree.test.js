const invertTree = require('../src/226.invert-binary-tree.js');
const { 
  createTree, 
  printTree 
} = require('../src/utils/binaryTree.js');

test('Example 1', () => {
  const arr = [4, 2, 7, 1, 3, 6, 9];
  const res = [4, 7, 9, 6, 2, 3, 1];

  const root = createTree(arr);
  const resRoot = invertTree(root);

  expect(printTree(resRoot)).toEqual(res);
});

test('Example 2', () => {
  const arr = [];
  const res = [];

  const root = createTree(arr);
  const resRoot = invertTree(root);

  expect(resRoot).toEqual(res);
});