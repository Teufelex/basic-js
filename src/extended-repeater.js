const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (!('repeatTimes' in options)) options.repeatTimes = 1;
  if (!("separator" in options)) options.separator = '+';
  if (!("additionSeparator" in options)) options.additionSeparator = '|';
  if (!("additionRepeatTimes" in options)) options.additionRepeatTimes = 1;
  let addition_string;
  if (options.additionRepeatTimes > 1) {
    addition_string = options.addition + options.additionSeparator;
    addition_string = addition_string.repeat(+options.additionRepeatTimes -1) + options.addition;
  } else {
    addition_string = options.addition;
  }
  let newStr;
  if (options.repeatTimes > 1 && addition_string) {
    newStr = str + addition_string + options.separator;
    return newStr.repeat(options.repeatTimes - 1) + str + addition_string;
  } else if (options.repeatTimes > 1 && !addition_string){
    newStr = str + options.separator;
    return newStr.repeat(options.repeatTimes - 1) + str;
  } else if (str == 'single'){
    return 'single';
  } else {
    return str + addition_string;
  }
};
  