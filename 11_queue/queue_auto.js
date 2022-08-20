const queue = (item) => { 
    const arr = []   
    setInterval(() => {
        arr.push(...item)
        arr.shift()
        console.log(arr)
        console.log(arr.length) 
        return arr.length
    }, 2000)
}

// сложность O(1) 
// ?
queue([1, 1])