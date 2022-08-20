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

const rotate = (source) => {

    const newMatrix = []
    let temporyArr = []
    
    for (let j=0; j<source[0].length; j++) {
        temporyArr = []         
        for (let i=source.length-1; i>=0; i--){
            const el = source[i][j] 
            temporyArr.push(el)
            // console.log('el', el) 
        }
        console.log('temporyArr', temporyArr) 
        newMatrix.push(temporyArr)
    }
    return newMatrix     
}

const rotate_180 = (sourse) => {
    return rotate(rotate(sourse))
}

const rotate_270 = (sourse) => {
    return rotate((rotate(rotate(sourse))))
}

// ?
console.log(rotate(matrix))
console.log(rotate(matrix_2))
console.log(rotate(matrix_3))

console.log(rotate_180(matrix))
console.log(rotate_270(matrix))