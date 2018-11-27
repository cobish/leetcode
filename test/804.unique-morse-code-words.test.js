const uniqueMorseRepresentations = require('../src/804.unique-morse-code-words.js');

test('Example 1', () => {
  const words = ['gin', 'zen', 'gig', 'msg'];
  expect(uniqueMorseRepresentations(words)).toBe(2);
});