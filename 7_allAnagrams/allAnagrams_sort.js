const allAnagrams = (array) => {
    if (!array.every(elem => elem.length === array[0].length)) return false
    const modelEl = array[0].split('').sort().join('')
    return array.every(elem => modelEl === elem.split('').sort().join(''))
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
console.log(allAnagrams(['bacd', 'bdac', 'cabd'])) // true