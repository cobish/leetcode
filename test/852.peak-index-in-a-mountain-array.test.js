const peakIndexInMountainArray = require('../src/852.peak-index-in-a-mountain-array.js');

test('Example 1', () => {
  expect(peakIndexInMountainArray([0, 1, 0])).toBe(1);
});

test('Example 2', () => {
  expect(peakIndexInMountainArray([0, 2, 1, 0])).toBe(1);
});