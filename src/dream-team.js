const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members) {
  if(Array.isArray(members) && members.length >0){
  let count='';
  for ( let i=0; i<members.length; i++){
    if(typeof members[i]=='string' ){
      members[i]=members[i].split('');
      for (let j=0; j<members[i].length; j++){
        if (members[i][0]==' '){ members[i].splice(0,1)
       }
      }
      members[i]=members[i].join('');
      count=count+members[i][0];
    }
  }
  return count.toUpperCase().split('').sort().join('');
 } else{
  return false;
 } 
}