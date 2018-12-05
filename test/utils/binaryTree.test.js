const { 
  createTree, 
  printTree 
} = require('../../src/utils/binaryTree.js');

test('create tree', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const res = [1 ,2 ,4, 8, 9, 5, 3, 6, 7];

  const root = createTree(arr);
  expect(printTree(root)).toEqual(res);
});

test('create tree 2', () => {
  const arr = [1, 2, null, 3];
  const res = [1 ,2, 3];

  const root = createTree(arr);
  expect(printTree(root)).toEqual(res);
});