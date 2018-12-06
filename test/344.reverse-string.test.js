const reverseString = require('../src/344.reverse-string.js');

test('Example 1', () => {
  expect(reverseString('hello')).toEqual('olleh');
});

test('Example 2', () => {
  expect(reverseString('A man, a plan, a canal: Panama')).toEqual('amanaP :lanac a ,nalp a ,nam A');
});

test('Example 3', () => {
  expect(reverseString('')).toEqual('');
});