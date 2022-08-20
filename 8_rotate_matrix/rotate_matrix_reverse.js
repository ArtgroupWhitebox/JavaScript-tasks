const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

const matrix_2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18]
]

const matrix_3 = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18]
]

const rotateReverse = (source) => {
    const rev = source.reverse()    
    // console.log('rev', rev)
    const newMatrix = []
    let temporyArr = []
    
    for (let j=0; j<rev[0].length; j++) {
        temporyArr = []         
        for (let i=0; i<rev.length; i++){
            const el = rev[i][j] 
            temporyArr.push(el)
            // console.log('el', el) 
        }
        console.log('temporyArr', temporyArr) 
        newMatrix.push(temporyArr)
    }
    return newMatrix     
}

const rotateReverse_180 = (sourse) => {
    return rotateReverse(rotateReverse(sourse))
}

const rotateReverse_270 = (sourse) => {
    return rotateReverse_180(rotateReverse(sourse))
}

// ?
console.log(rotateReverse(matrix))
console.log(rotateReverse(matrix_2))
console.log(rotateReverse(matrix_3))

console.log(rotateReverse_180(matrix))
console.log(rotateReverse_270(matrix))