const arr = [] 

const enqueue = (item) => {    
    arr.push(item)
}

const dequeue = () => { 
    if (arr.length === 0) console.log('warning: array is empty') 
    arr.shift() 
} 

// сложность O(1)
// ?
dequeue() 
enqueue(1)
enqueue(2)
enqueue(3)
enqueue(4)
console.log(arr)
dequeue() 
dequeue() 
console.log(arr)
console.log(arr.length)   


