const {
  maxDepth,
  maxDepth2
} = require('../src/104.maximum-depth-of-binary-tree.js');

const {
  createTree
} = require('../src/utils/binaryTree.js');

test('Example 1-1', () => {
  const arr = [3, 9, 20, null, null, 15, 7];

  const root = createTree(arr);
  expect(maxDepth(root)).toBe(3);
});


test('Example 1-2', () => {
  const arr = [];

  const root = createTree(arr);
  expect(maxDepth(root)).toBe(0);
});

test('Example 2-1', () => {
  const arr = [3, 9, 20, null, null, 15, 7];

  const root = createTree(arr);
  expect(maxDepth2(root)).toBe(3);
});

test('Example 2-2', () => {
  const arr = [];

  const root = createTree(arr);
  expect(maxDepth2(root)).toBe(0);
});