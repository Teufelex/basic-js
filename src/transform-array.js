const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--double-next') {
      if (i+1 < arr.length) {
        newArray.push(arr[i+1]);
      }
    } else if (arr[i] == '--double-prev') {
      if (i-2 >= 0 && arr[i-2] !== '--discard-next') {
        newArray.push(arr[i-1]);
      } else if (i-1 == 0) {
        newArray.push(arr[i-1]);
      }
    } else if (arr[i] == '--discard-next') {
      ++i;
    } else if (arr[i] == '--discard-prev') {
      if (i-2 >= 0 && arr[i-2] !== '--discard-next') {
        newArray.pop();
      } else if (i-1 == 0) {
        newArray.push(arr[i-1]);
      }
    } else {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};
