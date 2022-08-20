const allAnagrams = (array) => {
    if (!array.every(elem => elem.length === array[0].length)) return false
    return array.every(elem => (array[0].split('').every(subEl => elem.includes(subEl))))
}

// ?
console.log(allAnagrams(['abcd', 'bdac', 'cabd'])) // true
console.log(allAnagrams(['abcd', 'bd c', 'cabd'])) // false
console.log(allAnagrams(['abcd', 'bdac', 'bdac', 'bdac', 'caXd'])) // false
console.log(allAnagrams(['abcd', 'bdac', 'bdac', 'bdac', 'bbbbdac', 'cabd'])) // false
console.log(allAnagrams(['abcd', 'bdac', 'ca'])) // false
console.log(allAnagrams(['', 'abcd', 'bdac'])) // false
console.log(allAnagrams(['abcdabcd', 'bdac', 'cabd'])) // false
console.log(allAnagrams(['', '', ''])) // true