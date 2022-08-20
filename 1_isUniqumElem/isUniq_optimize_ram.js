const isUniqumElem = (string) => {
    let stats = {}    
    let SLOZHNOST=0
    for (let j=0; j<string.length; j++) {
        const x = string[j]
        SLOZHNOST++        
        // console.log('stats', stats)
        if (stats[x]) {
            return [false, SLOZHNOST]  
        } else {
            stats[x] = 1
        }
    }
    return [true, SLOZHNOST]  
}

// ?
console.log(isUniqumElem('abssdefgh'))
// [false, 4]
console.log(isUniqumElem('1234567'))
// [true, 7]
console.log(isUniqumElem('abcABC'))
// [true, 6]
console.log(isUniqumElem('abdfabdf'))
// [false, 5]