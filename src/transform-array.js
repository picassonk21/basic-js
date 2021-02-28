const CustomError = require("../extensions/custom-error");
const controls = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']

module.exports = function transform(arr) {
  if(!arr instanceof Array) throw new Error()
  let res = [...arr]
  for(let i = 0; i < res.length; i++) {
    if(res[i] === controls[0]) {
      res.splice(i+1, 1)
    } else if(res[i] === controls[1] && i > 0) {
      res.splice(i-1, 1)
      i--
    } else if(res[i] === controls[2]) {
      res.splice(i+1, 0, res[i+1])
    } else if(res[i] === controls[3]) {
      res.splice(i, 0, res[i-1])
      i++
    }
  }
  return res.filter(el => !controls.includes(el) && el !== undefined)
};
