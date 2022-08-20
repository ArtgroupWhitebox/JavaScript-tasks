const flatten = (array) => {
  return array.flat(Infinity)
}

// ?
console.log(flatten([[1], [[2, 3]], [[[4]]]])) 
// [1, 2, 3, 4]
console.log(flatten([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]])) 
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]