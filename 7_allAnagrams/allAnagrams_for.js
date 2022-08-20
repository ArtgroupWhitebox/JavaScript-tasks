// сверяем длину элемента массива с образцовым первым элементом массива и сразу сверяем 
// его подэлементы с образцом 
// и так по очереди относительно каждого элемента массива

const allAnagrams = (array) => {
    const modelEl = array[0]
    // console.log('modelEl', modelEl) 
    let el = '' 
    let SL = 0
    for (let i=1; i<array.length; i++) {
        SL++;
        el = array[i] 
        // console.log('el', el) 
        if (modelEl.length !== el.length) return [false, SL]
    
        let modelSubEl = ''      
        for (let j=0; j<modelEl.length; j++) {
            SL++;
            modelSubEl = modelEl[j] 
            // console.log('modelSubEl', modelSubEl)  
            if (!el.includes(modelSubEl)) return [false, SL]
        }
    }
    return [true, SL]
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