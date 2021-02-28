const CustomError = require("../extensions/custom-error");

module.exports = function countCats(list) {
  let res = 0;
  list.forEach(el => {
    el.forEach(item => {
      if(item === '^^') res+= 1
    })
  })
  return res
};
