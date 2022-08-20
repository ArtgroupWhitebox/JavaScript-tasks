const isUniqumEl = (string) => {
  return new Set(string).size === string.length  
}

// ?
console.log(isUniqumEl('abssdefgh')) 
// false
console.log(isUniqumEl('1234567'))
// true
console.log(isUniqumEl('abcABC'))
// true
console.log(isUniqumEl('abdfabdf'))
// false