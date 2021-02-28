const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let addition = []
  if(!(options.addition === undefined)) {
    let additionCount = options.additionRepeatTimes ? options.additionRepeatTimes : 1
    for(let i = 0; i < additionCount; i++) {
      addition.push(String(options.addition))
    }
  }
  addition = addition.join(options.additionSeparator? options.additionSeparator : '|')
  let res = [str+addition]
  let repeatCount = options.repeatTimes ? options.repeatTimes-1 : 0
  for(let i = 0; i < repeatCount; i++) {
    res.push(str + addition)
  }
  return res.join(options.separator ? options.separator : '+')
};
  