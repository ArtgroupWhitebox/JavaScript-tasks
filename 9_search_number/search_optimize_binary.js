const binary = (array, target) => {
    let indexStart = 0
    let indexEnd = array.length - 1
    
    if (target < array[indexStart] || target > array[indexEnd]) return -1

    while (true) { // бесконечный цикл
        if (target === array[indexStart]) return indexStart
        if (target === array[indexEnd]) return indexEnd
        if (indexEnd - indexStart <= 1) return -1 // проверяем есть или нет элементы между начальным и конечным индексами

        const indexMiddle = Math.floor((indexStart + indexEnd) / 2)

        if (target === array[indexMiddle]) return indexMiddle
        if (target > array[indexMiddle]) {
            indexStart = indexMiddle + 1
        }
        if (target < array[indexMiddle]) {
            indexEnd = indexMiddle - 1
        }
    }
}

// сложность log(n)
// данное решение актуально для отсортированных (упорядоченных) массивов
// ?
console.log(binary([1, 3, 6, 13, 17], 13)) // -> 3
console.log(binary([1, 3, 6, 13, 17], 12)) // -> -1