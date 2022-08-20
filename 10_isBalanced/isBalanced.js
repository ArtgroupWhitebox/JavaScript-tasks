const isBalanced = (string) => {
    const start = '([{'
    const end = ')]}'

    const temporary = []

    const obj = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    }

    for (let el of string) {
        // console.log('el', el)
        if (start.includes(el)) {
            temporary.push(el)
            // console.log('temporary', temporary)
        } else if (end.includes(el)) {
            const last = temporary.pop()
            // console.log('last', last)
            if (obj[el] !== last) return false
        }
    }

    return !temporary.length
}

// ?
console.log(isBalanced('(x + y) - (4)')) // -> true
console.log(isBalanced('(((10 ) ()) ((?)(:)))')) // -> true
console.log(isBalanced('({(10 ) ()} [(?)(:)])')) // -> true
console.log(isBalanced('[{(10)10}11]')) // -> true
console.log(isBalanced('(50)(')) // -> false
console.log(isBalanced('[{]}')) // -> false
console.log(isBalanced(')[{]}(')) // -> false