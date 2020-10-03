const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    chainMaker.arr.length;
    return this;
  },
  addLink(value) { 
    chainMaker.arr.push(String(value));
    return this;
  },
  removeLink(position) {
    if (position <= 0 || position > chainMaker.arr.length || typeof +position !== "number") {
      chainMaker.arr = [];
      return err;
    } else {
      chainMaker.arr.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    chainMaker.arr.reverse();
    return this;  
  },
  finishChain() {
    let total = '( ' + chainMaker.arr.join(' )~~( ') + ' )';
    chainMaker.arr = [];
    return total;
  }
};

module.exports = chainMaker;
