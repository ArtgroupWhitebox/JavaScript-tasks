const isUniqumElem = (string) => {
    let SLOZHNOST = 0
    let n = 0
    for (let x of string) {
        // console.log('x', x)
        n = 0 
        for (let y of string) {
            SLOZHNOST++;
            // console.log('y', y)
            if (x === y) { 
                n = n + 1
                // console.log('n', n)
                if (n > 1) {
                  return [false, SLOZHNOST]
                }             
            }
        }  
    }
    return [true, SLOZHNOST]  
}

// ?
console.log(isUniqumElem('abssdefgh'))
// [false, 22]
console.log(isUniqumElem('1234567'))
//  [true, 49]
console.log(isUniqumElem('abcABC'))
// [true, 36]
console.log(isUniqumElem('abdfabdf'))
// [false, 5]