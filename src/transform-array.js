const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

   

  let arrDiscardNext=arr.slice();
  for (let i=0;i < arrDiscardNext.length;i++){
    if(arrDiscardNext[i]=='--discard-next'){
       arrDiscardNext.splice(i,2); 
    }
  }

  let arrDiscardPrev=arrDiscardNext;
  for (let i=0;i < arrDiscardPrev.length;i++){
    if(arrDiscardPrev[i]=='--discard-prev' && i-1 <0){
       arrDiscardPrev.splice(i,1); 
    } else if(arrDiscardPrev[i]=='--discard-prev'){
      arrDiscardPrev.splice(i-1,2)
    }
  }

  let arrDoubleNext=arrDiscardPrev;
    for (let i=0;i < arrDoubleNext.length;i++){
      if(arrDoubleNext[i]=='--double-next' && arrDoubleNext.length==i+1 ){
        arrDoubleNext.splice(i,1);break;
      } else if (arrDoubleNext[i]=='--double-next'){
        arrDoubleNext.splice(i,1);
        arrDoubleNext.splice(i,0,arrDoubleNext[i]);
        }
    }

  let arrDoublePrev=arrDoubleNext;
  for (let i=0;i < arrDoublePrev.length;i++){
      if(arrDoublePrev[i]=='--double-prev' && i-1 <0 ){
        arrDoublePrev.splice(i,1);break;
      } else if (arrDoublePrev[i]=='--double-prev'){
        arrDoublePrev.splice(i,1);
        arrDoublePrev.splice(i,0,arrDoublePrev[i-1]);
        }
    }

  return arrDoublePrev; 
  
  
  
};
