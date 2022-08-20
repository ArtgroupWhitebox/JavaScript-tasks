const isUniqumEl = (string) => {
    for (let i=0; i<string.length; i++) {
        let x = string[i]
        if (string.indexOf(x) !== i) {
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