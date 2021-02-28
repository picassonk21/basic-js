const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const K = 0.693 / HALF_LIFE_PERIOD;
const validation = (activity) => {
  return activity.split('').every(val => /[0-9]/.test(val))
}
const isInRange = (activity) => {
  if(+activity <= 0 || +activity > 15) return false
  return true
}

module.exports = function dateSample(activity) { 
  if(!activity || (typeof activity) !== 'string' || !validation(activity) || !isInRange(activity)) return false
  
  return Math.ceil(Math.log(activity/MODERN_ACTIVITY) / K)
};
