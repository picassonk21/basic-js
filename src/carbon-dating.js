const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const K = 0.693 / 5730
const validate = (activity) => {
  return typeof +activity === 'number'
}
const isInRange = (activity) => {
  return +activity > 0 && +activity <= MODERN_ACTIVITY
}

module.exports = function dateSample(activity) {
  if(!activity || (typeof activity !== 'string') || !validate(activity) || !isInRange(activity)) return false 
  return Math.ceil(Math.log(MODERN_ACTIVITY/+activity) / K)
};
