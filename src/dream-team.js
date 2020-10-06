const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members) {
  // throw new CustomError('Not implemented');
  if(Array.isArray(members) && members.length >0){
  let count='';
  for (i=0; i<members.length; i++){
    if(typeof members[i]=='string' ){
    count=count+members[i][0];
    }
  }
  return count.toUpperCase().split('').sort().join('');
} else{
  return false;
} 
};
