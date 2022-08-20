const removeDupes = (string) => {
    let arr = []    
    let isExists = false // существует?
    arr.push(string[0]) 
    // console.log('arr', arr)
    for (let i=1; i < string.length; i++) {         
        const x=string[i]
        // console.log('x', x)
        isExists = false
        for (let j=0; j < arr.length; j++) {
            const y=arr[j]
            // console.log('y', y)
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
console.log(removeDupes('abcd'))
// abcd
console.log(removeDupes('aabbccdd'))
// abcd
console.log(removeDupes('abcddcba'))
// abcd
console.log(removeDupes('abababcdcdcd'))
// abcd