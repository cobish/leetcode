/**
 * 929.独特的电子邮件地址
 * https://leetcode-cn.com/problems/unique-email-addresses/description/
 */

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  var hashMap = {};
  var num = 0;

  for (var i = 0; i < emails.length; i++) {
    var email = emails[i];

    var emailArr = email.split('@');
    var local = emailArr[0];
    var domain = emailArr[1];

    local = local.split('+')[0];
    local = local.replace(/\./g, '');

    var newEmail = local + '@' + domain;
    if (!hashMap[newEmail]) {
      num += 1;
      hashMap[newEmail] = newEmail;
    }
  }

  return num;
};

module.exports = numUniqueEmails;