const removeDupes2 = (string) => {
    let arr = []    
    let isExists = false  // существует ли   
    arr.push(string[0]) 
    for (let x of string) { 
        isExists = false
        for (let y of arr) {
            if (x===y) {
                isExists = true
                break 
            } 
        }
        if (isExists === false) {
            arr.push(x)  
        }
    }
    return arr.join('')
}

// ?
console.log(removeDupes2('abcd'))
// abcd
console.log(removeDupes2('aabbccdd'))
// abcd
console.log(removeDupes2('abcddcba'))
// abcd
console.log(removeDupes2('abababcdcdcd'))
// abcd