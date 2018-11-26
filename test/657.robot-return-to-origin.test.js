const obj = require('../src/657.robot-return-to-origin.js');
const judgeCircle = obj.judgeCircle;
const judgeCircle2 = obj.judgeCircle2;

test('Example 1-1', () => {
  expect(judgeCircle('UD')).toBe(true);
});

test('Example 1-2', () => {
  expect(judgeCircle('LL')).toBe(false);
});

test('Example 2-1', () => {
  expect(judgeCircle2('UD')).toBe(true);
});

test('Example 2-2', () => {
  expect(judgeCircle2('LL')).toBe(false);
});