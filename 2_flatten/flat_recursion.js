const flatten = (array, arr = []) => {
  for (let i=0; i<array.length; i++) {
    if (Array.isArray(array[i])) {
      flatten(array[i], arr)      
    } else {
      arr.push(array[i])
    }
  }
  return arr 
}

// ?
console.log(flatten([[1], [[2, 3]], [[[4]]]])) 
// [1, 2, 3, 4]
console.log(flatten([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]])) 
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]