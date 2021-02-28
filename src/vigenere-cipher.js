const CustomError = require("../extensions/custom-error");

const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const prepareArgs = (...args) => {
  if(args.length < 2) {
    throw new Error()
  }
  [message, key] = args
  while(key.length < message.split(' ').join('').length) {
    key += key
  }
  key = key.split('')
  for(let i = 0; i < message.length; i++) {
    if(message[i] === ' '){
      key.splice(i, 0, ' ')
    }
  }
  key = key.slice(0, message.length).join('')
  return [message.toUpperCase(), key.toUpperCase()]
}

class VigenereCipheringMachine {
  constructor(type) {
    this.type = (type === false) ? false : true
  }
  encrypt(...args) {
    [message, key] = prepareArgs(...args)
    let res = ''
    for(let i = 0; i < message.length; i++) {
      if(alphabet.includes(message[i])) {
        let position = alphabet.indexOf(message[i]) + alphabet.indexOf(key[i])
        if(position >= alphabet.length) position -= alphabet.length
        res += alphabet[position]
      } else {
        res += message[i]
      }
    }
    if(!this.type) return res.split('').reverse().join('')
    return res 
  }    
  decrypt(...args) {
    [message, key] = prepareArgs(...args)
    let res = ''
    for(let i = 0; i < message.length; i++) {
      if(alphabet.includes(message[i])) {
        let position = alphabet.indexOf(message[i]) - alphabet.indexOf(key[i])
        if(position < 0) position += alphabet.length
        res += alphabet[position]
      } else {
        res += message[i]
      }
    }
    if(!this.type) return res.split('').reverse().join('')
    return res 
  }
}

module.exports = VigenereCipheringMachine;
