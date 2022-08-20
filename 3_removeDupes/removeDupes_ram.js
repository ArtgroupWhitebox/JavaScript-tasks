const removeDupes = (string) => {
    let obj = {}
    for (let i=0; i<string.length; i++) {
        const x=string[i]
        if (!obj[x]) {
            obj[x]=1
        } 
    }
    return Object.keys(obj).join('')
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
