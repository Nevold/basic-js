const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  if(typeof(date) === 'undefined') return 'Unable to determine the time of year!';
  let toString = {}.toString;
  if (toString.call(date) !== '[object Date]') throw new Error("Error");

  let month = date.getMonth();
  let result = (month >= 2 && month <=4 ) ? 'spring' :
    (month >= 5 && month <=7 ) ? 'summer' :
    (month >= 8 && month <=10 ) ? 'fall' :
      'winter';
      return result;
};
