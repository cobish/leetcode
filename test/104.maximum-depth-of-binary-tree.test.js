const obj = require('../src/104.maximum-depth-of-binary-tree.js');
const createTree = obj.createTree;
const print = obj.print;
const maxDepth = obj.maxDepth;
const maxDepth2 = obj.maxDepth2;

test('create tree', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const res = [1 ,2 ,4, 8, 9, 5, 3, 6, 7];

  const root = createTree(arr);
  expect(print(root)).toEqual(res);
});

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