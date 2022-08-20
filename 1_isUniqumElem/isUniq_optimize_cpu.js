const isUniqumElem = (string) => {
    let SLOZHNOST=0
    for (let j=0; j<string.length; j++) {
        const x = string[j]
        for (let i=j+1; i < string.length; i++) {
            SLOZHNOST++
            const y = string[i]
            if (x === y) { 
                return [false, SLOZHNOST]           
            }
        }  
    }
    return [true, SLOZHNOST]  
}

// ?
console.log(isUniqumElem('abssdefgh'))
// [false, 16]
console.log(isUniqumElem('1234567'))
// [true, 21]
console.log(isUniqumElem('abcABC'))
// [true, 15]
console.log(isUniqumElem('abdfabdf'))
// [false, 4]