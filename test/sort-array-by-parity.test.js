const obj = require('../src/sort-array-by-parity.js');
const sortArrayByParity = obj.sortArrayByParity;
const sortArrayByParity2 = obj.sortArrayByParity2;

test('Example 1-1', () => {
  expect(sortArrayByParity([3, 1, 2, 4])).toEqual([4, 2, 3, 1]);
});

test('Example 1-2', () => {
  expect(sortArrayByParity([0, 2])).toEqual([2, 0]);
});

test('Example 1-3', () => {
  expect(sortArrayByParity([1, 3])).toEqual([1, 3]);
});

test('Example 2-1', () => {
  expect(sortArrayByParity2([3, 1, 2, 4])).toEqual([4, 2, 1, 3]);
});

test('Example 2-2', () => {
  expect(sortArrayByParity2([0, 2])).toEqual([0, 2]);
});

test('Example 2-3', () => {
  expect(sortArrayByParity2([1, 3])).toEqual([1, 3]);
});