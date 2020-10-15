const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
          let countFunc= this.calculateDepth(arr[i])
        if (countFunc > result) {result = countFunc}
      }
    }
    result++;
    return result;
  }
};