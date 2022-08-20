const isStringRotated = (source, test) => { 
    if (source.length===0 && test.length===0) return true
    if (source.length!==test.length) return false    
    for (let i=0 ; i<source.length; i++)  {
        const rotate = source.slice(i, source.length) + source.slice(0, i)
        // console.log('rotate', rotate)
        if (rotate===test) {
            return true
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