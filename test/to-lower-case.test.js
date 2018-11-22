const obj = require('../src/to-lower-case.js');
const toLowerCase = obj.toLowerCase;
const toLowerCase2 = obj.toLowerCase2;
const toLowerCase3 = obj.toLowerCase3;

test('Example 1-1', () => {
  expect(toLowerCase('Hello')).toBe('hello');
});

test('Example 1-2', () => {
  expect(toLowerCase('here')).toBe('here');
});

test('Example 1-3', () => {
  expect(toLowerCase('LOVELY')).toBe('lovely');
});

test('Example 2-1', () => {
  expect(toLowerCase2('Hello')).toBe('hello');
});

test('Example 2-2', () => {
  expect(toLowerCase2('here')).toBe('here');
});

test('Example 2-3', () => {
  expect(toLowerCase2('LOVELY')).toBe('lovely');
});

test('Example 3-1', () => {
  expect(toLowerCase3('Hello')).toBe('hello');
});

test('Example 3-2', () => {
  expect(toLowerCase3('here')).toBe('here');
});

test('Example 3-3', () => {
  expect(toLowerCase3('LOVELY')).toBe('lovely');
});