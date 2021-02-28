const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(`( ${value} )`)
    return chainMaker
  },
  removeLink(position) {
    if(!Number.isInteger(position) || (position > this.getLength()-1)) {
      this.chain = []
      throw new Error()
    }
    this.chain.splice(position-1, 1)
    return chainMaker
  },
  reverseChain() {
    if(this.chain.length > 0) {
      this.chain = this.chain.reverse()
    }
    return chainMaker
  },
  finishChain() {
    let res = this.chain.join('~~')
    this.chain = []
    return res
  }
};

module.exports = chainMaker;
