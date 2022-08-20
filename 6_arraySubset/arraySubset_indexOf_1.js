const arraySubset = (source, subset) => {
    if (source.length < subset.length) return false
    for (let x of subset) {
        const index = source.indexOf(x)
        if (index === -1) return false
        delete source[index]
    }
    return true
}

// ?
console.log(arraySubset([2, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])) // -> false
console.log(arraySubset([1, 2], [1, 2, 3])) // -> false