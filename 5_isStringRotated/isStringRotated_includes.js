const isStringRotated = (source, test) => {  
    if (source.length===0 && test.length===0) return true
    if (source.length!==test.length) return false    
    return (source+source).includes(test)
}

// ?
console.log(isStringRotated('javascript', 'scriptjava')) // -> true
console.log(isStringRotated('javascript', 'iptjavascr')) // -> true
console.log(isStringRotated('javascript', 'java')) // -> false
console.log(isStringRotated('momontemko', 'montemkomo')) // -> true
console.log(isStringRotated('', '')) // -> true