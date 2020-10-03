const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
  let arr = [];
  for (let i = 0; i < diskNumber; i++) {
    if (i == 0) {
      arr.push(1);
    } else {
      arr.push(arr[i-1]*2)
    }
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  sum = Math.floor(sum)
  let totalseconds = (3600 / turnsSpeed) * sum;
  totalseconds = Math.floor(totalseconds);
  let obj = {
    turns: +sum,
    seconds: totalseconds,
  }
  return obj;
};
