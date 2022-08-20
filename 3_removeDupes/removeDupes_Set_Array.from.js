const removeDupes = (string) => {
    const obj = new Set(string)
    return Array.from(obj).join('')
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