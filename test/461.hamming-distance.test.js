const hammingDistance = require('../src/461.hamming-distance.js');

test('Example 1', () => {
  const x = 1;
  const y = 4;

  expect(hammingDistance(x, y)).toBe(2);
});

test('Example 2', () => {
  const x = 1;
  const y = 10;

  expect(hammingDistance(x, y)).toBe(3);
})