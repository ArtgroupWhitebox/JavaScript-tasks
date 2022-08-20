const isStringRotated = (source, test) => { 
    if (source.length===0 && test.length===0) return true
    if (source.length!==test.length) return false
    let startIndex = null   
    let arr = [] 
    for (let i=0 ; i<test.length; i++)  {
        const x=test[i] 
        arr = []
        if (x===source[0]) { 
            startIndex = i                     
            // console.log('startIndex', startIndex) 
            for (let j=startIndex ; j<test.length; j++)  {
                const y=test[j] 
                arr.push(y)         
            }
            for (let j=0; j<startIndex; j++) {
                const y=test[j]
                arr.push(y)          
            }    
            // console.log('arr', arr) 
            if (arr.join('')===source) {
                return true
            }    
        }          
    }
    return false
}

// ?
console.log(isStringRotated('javascript', 'scriptjava')) // -> true
console.log(isStringRotated('javascript', 'iptjavascr')) // -> true
console.log(isStringRotated('javascript', 'java')) // -> false
console.log(isStringRotated('momontemko', 'montemkomo')) // -> true
console.log(isStringRotated('', '')) // -> true