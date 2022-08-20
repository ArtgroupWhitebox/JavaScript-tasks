const removeDupes3 = (string) => {
    let arr = []    
    let n = 0  // счетчик  
    arr.push(string[0]) 
    for (let x of string) { 
        n = 0
        for (let y of arr) {
            if (x===y) {
                n = n+1
                break 
            } 
        }
        if (n === 0) {
            arr.push(x)  
        }
    }
    return arr.join('')
}

// ?
console.log(removeDupes3('abcd'))
// abcd
console.log(removeDupes3('aabbccdd'))
// abcd
console.log(removeDupes3('abcddcba'))
// abcd
console.log(removeDupes3('abababcdcdcd'))
// abcd