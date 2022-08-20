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
    const newMatrix = source[0].map(_ => [])
    
    for (let j=0; j<source[0].length; j++) {
        for (let i=0; i<source.length; i++) {
            newMatrix[j][i] = source[source.length - 1 - i][j] 
        }
    }
    return  newMatrix
}

const print = (arr) => {
    arr.forEach(i => console.log(i))
}

const rotate_180 = (sourse) => {
    return rotate(rotate(sourse))
}

const rotate_270 = (sourse) => {
    return rotate((rotate(rotate(sourse))))
}

//     0  1  2       0  1  2     i j i j i j     i j i j i j  
//  0 [1, 2, 3]   0 [7, 4, 1]    0:0 0:1 0:2     2:0 1:0 0:0 
//  1 [4, 5, 6]   1 [8, 5, 2]    1:0 1:1 1:2     2:1 1:1 0:1 
//  2 [7, 8, 9]   2 [9, 6, 3]    2:0 2:1 2:2     2:2 1:2 0:2 

// ?
print(rotate(matrix))
console.log(rotate(matrix))

print(rotate(matrix_2))
console.log(rotate(matrix_2))

print(rotate(matrix_3))
console.log(rotate(matrix_3))

print(rotate_180(matrix))
console.log(rotate_180(matrix))
print(rotate_270(matrix))
console.log(rotate_270(matrix))