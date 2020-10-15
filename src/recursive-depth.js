const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr) {
    let count=1;
    for (let i = 0; i < arr.length; i++) {
      if( Array.isArray(arr[i])){
        count ++
      }
     }
     return count;
    }
};