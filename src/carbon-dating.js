const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity) !== 'string' || parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity) > 15 || isNaN(parseFloat(sampleActivity))) {
    return false;
  } 
  let result =0;
  result = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)/0.693));
  return (result >0) ? result : false;

};
