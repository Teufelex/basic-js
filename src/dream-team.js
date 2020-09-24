const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arr = [];
  let total;
  if (members == null || members == undefined) return false;
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      let a;
      a = members[i].trim().substring(0, 1).toUpperCase();
      arr.push(a);
    }
  } 
  if (arr == undefined || arr == null) {
    return false;
  } else {
    return arr.sort().join(''); 
  }
};
