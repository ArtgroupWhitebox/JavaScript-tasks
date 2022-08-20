const deepEqual = (x, y) => {

   if (Number.isNaN(x) && Number.isNaN(y)) return true 
      // console.log(Number.isNaN(x))
      // console.log(Number.isNaN(y))

   if (typeof x !== typeof y) return false 
      // console.log(typeof(x))
      // console.log(typeof(y))

   if (typeof x !== 'object' 
      || (x === null && y === null)) return x === y

   if (Object.keys(x).length !== Object.keys(y).length) return false
      // console.log(Object.keys(x))
      // console.log(Object.keys(y))

   for (let key of Object.keys(x)) {
      // console.log(x[key])
      // console.log(y[key])
      if (!deepEqual(x[key], y[key])) return false
   }

   return true
}

const source = {a: 1, b: {c: 1}}
const test1 = {a: 1, b: {c: 1}}
const test2 = {b: {c: 1}, a: 1}
const test3 = {a: 1, b: {c: 2}}
const test4 = [1, {c: 1}]
const test5 = [{c: 1}, 1]

// ?
console.log(deepEqual(source, test1)) // -> true
console.log(deepEqual(source, test2)) // -> true
console.log(deepEqual(source, test3)) // -> false
console.log(deepEqual(NaN, NaN)) // -> true
console.log(deepEqual('test', 'test!')) // -> false
console.log(deepEqual()) // -> true
console.log(deepEqual(null)) // -> false
console.log(deepEqual(null, null)) // -> true
console.log(deepEqual(test4, test5)) // -> false