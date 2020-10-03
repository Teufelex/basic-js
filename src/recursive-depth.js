const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!arr) return 1;
    let sum = 1; //Cчетчик глубины каждого массива (по умолчанию считающий, что передан хотя бы 1 массив arr и мы уже в нем)
    let res = 1; //Счетчик глубины основного массива
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        sum += this.calculateDepth(arr[i]); //1 = 1 + this.calculateDepth(arr[i]) - на каждом уровне увеличивается на 1
      }  else {
        sum = 1; // то же и без else, но так нагляднее
      }
      if (sum > res) {
        res = sum;
      } 
      sum = 1; //Сбрасываем счетчик глубины каждого массива
    }
    return res;
  }
};