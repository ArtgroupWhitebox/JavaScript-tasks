const highestFrequency = (array) => {
    let stats = {}
    for (let x of array) {
        if (stats[x]) {
            stats[x] = stats[x] + 1
        } else {
            stats[x] = 1
        }
    }     
    // console.log(stats)
    let highest  = ''
    let n = 0
    for (let y in stats) {         
        if (stats[y] > n) {
            n = stats[y]
            highest = y
        }
        // console.log('highest', highest)
    }
    return highest
}

// ?
console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e']))
// c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc']))
// abc
console.log(highestFrequency(['abc', 'def']))
// abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi' ]))
// ghi