const mergeTrees = require('../src/617.merge-two-binary-trees.js');
const { 
  createTree, 
  printTree 
} = require('../src/utils/binaryTree.js');

test('Example 1', () => {
  const arr1 = [1, 3, 2, 5];
  const arr2 = [2, 1, 3, null, 4, null, 7];
  const res = [3, 4, 5, 4, 5, null, 7];

  const root1 = createTree(arr1);
  const root2 = createTree(arr2);
  const resRoot = mergeTrees(root1, root2);

  expect(printTree(resRoot)).toEqual(res);
});

test('Example 2', () => {
  const arr1 = [];
  const arr2 = [];

  const root1 = createTree(arr1);
  const root2 = createTree(arr2);
  const resRoot = mergeTrees(root1, root2);

  expect(resRoot).toEqual(null);
});

test('Example 3', () => {
  const arr1 = [1];
  const arr2 = [];
  const res = [1];

  const root1 = createTree(arr1);
  const root2 = createTree(arr2);
  const resRoot = mergeTrees(root1, root2);

  expect(printTree(resRoot)).toEqual(res);
});

test('Example 4', () => {
  const arr1 = [];
  const arr2 = [1];
  const res = [1];

  const root1 = createTree(arr1);
  const root2 = createTree(arr2);
  const resRoot = mergeTrees(root1, root2);

  expect(printTree(resRoot)).toEqual(res);
});