const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (+sampleActivity <= 0 || +sampleActivity > 15 || !sampleActivity) return false;
  if (typeof sampleActivity !== 'string' || isNaN(+sampleActivity)) return false;
  let t;
  let k = 0.693/HALF_LIFE_PERIOD;
  t = Math.log(MODERN_ACTIVITY/sampleActivity) / k;
  return t;
};
