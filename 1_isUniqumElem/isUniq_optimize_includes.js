const isUniqumEl = (string) => {
    for (let i=0; i<string.length; i++) {
        if (string.includes(string[i], i+1) === true) {
            return false
        }
    }
    return true
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