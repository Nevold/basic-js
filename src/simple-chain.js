const CustomError = require("../extensions/custom-error");
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    // if(value == undefined){
    //   this.arr.push('( null )');
    // } else{
    this.arr.push(`( ${value} )`);
    // }
    return this;
   
  },
  removeLink(position) {
    if (!Number.isInteger(position) || (position < 1 || position > this.arr.length ||  typeof position != 'number' ) || isNaN(position) ){
      this.arr = [];
      throw new Error();
    }
    else{
      this.arr.splice(position - 1, 1)
      return this;
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this
  },
  finishChain() {
    let endChain = this.arr.join('~~');
    this.arr = [];
    return endChain
  }
 };

module.exports = chainMaker;
