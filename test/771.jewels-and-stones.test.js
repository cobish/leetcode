const obj = require('../src/771.jewels-and-stones.js');
const numJewelsInStones = obj.numJewelsInStones;
const numJewelsInStones2 = obj.numJewelsInStones2;

test('示例 1-1', () => {
  const J = 'aA';
  const S = 'aAAbbbb';

  expect(numJewelsInStones(J, S)).toBe(3);
});

test('示例 1-2', () => {
  const J = 'z';
  const S = 'ZZ';

  expect(numJewelsInStones(J, S)).toBe(0);
});

test('示例 2-1', () => {
  const J = 'aA';
  const S = 'aAAbbbb';

  expect(numJewelsInStones2(J, S)).toBe(3);
});

test('示例 2-2', () => {
  const J = 'z';
  const S = 'ZZ';

  expect(numJewelsInStones2(J, S)).toBe(0);
});