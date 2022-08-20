const isBalanced = (string) => {   
    const regexp = /[(){}[\]]/g
    const result = string.match(regexp)
    console.log(result) 

    const bkts = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    }
    const closebkts = ')]}'

    if ( !Number.isInteger(result.length / 2) ) return false
    if ( closebkts.includes(result[0]) ) return false

    let i=0 
    while (i<result.length) {
        
        if (closebkts.includes(result[i])) {                      
            if (result[i-1] === bkts[result[i]]) {
                console.log('result[i-1]', result[i-1])
                result.splice(i-1, 2)
                i=0                 
                console.log(result)
            } else {
                return false
            } 
        } else {
            i++
        }
    }
    return true  
}

// ?
console.log(isBalanced('(x + y) - (4)')) // -> true
console.log(isBalanced('(((10 ) ()) ((?)(:)))')) // -> true
console.log(isBalanced('([(10) ()] [4 {(?)(:) 7}])')) // -> true
console.log(isBalanced('[{()}]')) // -> true
console.log(isBalanced('(50)(')) // -> false
console.log(isBalanced('[{]}')) // -> false
console.log(isBalanced(')[{]}(')) // -> false