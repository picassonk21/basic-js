const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    for(let item of arr) {
      if(item instanceof Array) {
        let newDepth = this.calculateDepth(item)
        if(newDepth >= depth) depth = newDepth + 1
      }
    }
    return depth
  }
};