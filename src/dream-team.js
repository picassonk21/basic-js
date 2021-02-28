const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!(members instanceof Array)) return false
  let res = ''
  members.filter(el => typeof el === 'string').map(member => member.split(' ').join('')).forEach(item => res += item[0])
  return res.toUpperCase().split('').sort().join('')
};
