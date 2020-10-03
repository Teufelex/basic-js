const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date)) {
    return err;
  }
  if (Object.prototype.toString.call(date) != '[object Date]') return err;
  let month = date.getMonth();
  if (month <= 1 || month == 11) {
    return 'winter';
  } else if (month > 1 && month <= 4) {
    return 'spring';
  } else if (month > 4 && month <= 7) {
    return 'summer';
  } else if (month > 7 && month <= 11) {
    return 'autumn/fall';
  } else {
    return err;
  }
};
