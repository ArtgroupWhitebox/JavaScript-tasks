const removeDupes2 = (string) => {
    const obj = new Set(string)
    return [...obj].join('')
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