const numUniqueEmails = require('../src/929.unique-email-addresses.js');

test('示例 1-1', () => {
  const arr = [
    'test.email+alex@leetcode.com',
    'test.e.mail+bob.cathy@leetcode.com',
    'testemail+david@lee.tcode.com'
  ];

  expect(numUniqueEmails(arr)).toBe(2);
});