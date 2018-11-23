const flipAndInvertImage = require('../src/flipping-an-image.js');

test('Example 1', () => {
  const arr = [
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0]
  ];

  const res = [
    [1, 0, 0],
    [0, 1, 0],
    [1, 1, 1]
  ];

  expect(flipAndInvertImage(arr)).toEqual(res);
});

test('Example 2', () => {
  const arr = [
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 0]
  ];

  const res = [
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 1],
    [1, 0, 1, 0]
  ];

  expect(flipAndInvertImage(arr)).toEqual(res);
});