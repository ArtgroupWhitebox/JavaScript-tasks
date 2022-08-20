const headerTask = document.getElementById('header_task')
const h2Task = document.getElementById('h2_task')
const bodyTask = document.getElementById('body_task')
const inputTask = document.getElementById('input_task')
const outputTask = document.getElementById('output_task')

const headerSolution = document.getElementById('header_solution')
const h2Solution = document.getElementById('h2_solution')

let taskLocation = window.location.search  // ?task_1
let solutionAmount = null

let taskNumber = ''
let taskName = ''
let taskBody = ''
let taskInput = ''
let taskOutput = ''

if (taskLocation === '?task_1') {
    taskNumber = 'Задача 1'
    taskName = 'Уникальность всех символов в строке'
    taskBody = 'Напишите функцию, которая определяет уникальны ли все символы в строке, с учетом регистра.'
    taskInput = ' String'
    taskOutput = ' Boolean'
    solutionAmount = 6
}

if (taskLocation === '?task_2') {
    taskNumber = 'Задача 2'
    taskName = 'Плоский массив'
    taskBody = 'Напишите функцию, которая принимаует массив с вложенными массивами и распакуйте её, в результирующий новый одномерный массив.'
    taskInput = ' Array'
    taskOutput = ' Array'
    solutionAmount = 2
}

if (taskLocation === '?task_3') {
    taskNumber = 'Задача 3'
    taskName = 'Удаление всех повторяющихся значений в строке'
    taskBody = 'Напишите функцию, которая принимает строку и возвращает новую строку, в которой удалены все дублирующиеся символы.'
    taskInput = ' String'
    taskOutput = ' String'
    solutionAmount = 6
}

if (taskLocation === '?task_4') {
    taskNumber = 'Задача 4'
    taskName = 'Какая строка встречается чаще всего'
    taskBody = 'Напишите функцию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве. Если таких строк несколько, нужно вернуть первую, слева на право.'
    taskInput = ' String[ ]'
    taskOutput = ' String'
    solutionAmount = 1
}

if (taskLocation === '?task_5') {
    taskNumber = 'Задача 5'
    taskName = 'Повернута ли строка?'
    taskBody = 'Напишите функцию, которая принимает 2 строки. Верните true если строки являются перевернутым вариантом друг друга (см. пример). Иначе верните false.'
    taskInput = ' String, String'
    taskOutput = ' Boolean'
    solutionAmount = 3
}

if (taskLocation === '?task_6') {
    taskNumber = 'Задача 6'
    taskName = 'Является ли массив подмножеством другого массива'
    taskBody = 'Напишите функцию, которая проверяет, является ли второй массив подмножеством первого. А именно, есть ли элементы второго массива в первом.'
    taskInput = ' Number[] & String[], Number[] & String[]'
    taskOutput = ' Boolean'
    solutionAmount = 2
}

if (taskLocation === '?task_7') {
    taskNumber = 'Задача 7'
    taskName = 'Анаграммы'
    taskBody = 'Напишите функцию, которая проверяет, являются ли все элементы в массиве анаграммами друг друга.'
    taskInput = ' String[ ]'
    taskOutput = ' Boolean'
    solutionAmount = 4
}

if (taskLocation === '?task_8') {
    taskNumber = 'Задача 8'
    taskName = 'Перевернуть матрицу'
    taskBody = 'Напишите функцию, которая принимает матрицу и переворачивает её на 90 градусов по часовой стрелке. Также, напишите еще 2 функции, которые переворачивают матрицу на 180 и 270 градусов.'
    taskInput = ' Number[ ][ ]'
    taskOutput = ' Number[ ][ ]'
    solutionAmount = 3
}

if (taskLocation === '?task_9') {
    taskNumber = 'Задача 9'
    taskName = 'Простой поиск'
    taskBody = 'Напишите функцию, которая принимает отсортированный массив с числами и число. Верните индекс числа, если оно есть в массиве, иначе верните -1.'
    taskInput = ' Number[ ], Number'
    taskOutput = ' Number'
    solutionAmount = 3
}

if (taskLocation === '?task_10') {
    taskNumber = 'Задача 10'
    taskName = 'Сбалансированные скобки'
    taskBody = 'Напишите функцию, которая проверит строку на сбалансированность скобок: {}, (), []. Вернуть true если они сбалансированы, иначе false.'
    taskInput = ' String'
    taskOutput = ' Boolean'
    solutionAmount = 2
}

if (taskLocation === '?task_11') {
    taskNumber = 'Задача 11'
    taskName = 'Очередь с О(1) сложностью операций'
    taskBody = 'Создайте очередь, в которой будут реализованы операции на добавление элементов в конец этой очереди, удаление первого элемента и вычисление размера очереди, со сложностью алгоритма О(1).'
    solutionAmount = 3
}

if (taskLocation === '?task_12') {
    taskNumber = 'Задача 12'
    taskName = 'Deep Equal'
    taskBody = 'Напишите функцию, которая проверяет на строгое равенство два входящих параметра.'
    taskInput = ' Any, Any'
    taskOutput = ' Boolean'
    solutionAmount = 1
}

if (headerTask) headerTask.insertAdjacentHTML('afterbegin', taskNumber)
if (h2Task) h2Task.insertAdjacentHTML('afterbegin', taskName)
if (bodyTask) bodyTask.insertAdjacentHTML('afterbegin', taskBody)
if (inputTask) inputTask.insertAdjacentHTML('beforeend', taskInput)
if (outputTask) outputTask.insertAdjacentHTML('beforeend', taskOutput)

if (headerSolution) headerSolution.insertAdjacentHTML('afterbegin', solutionNumber)
if (h2Solution) h2Solution.insertAdjacentHTML('afterbegin', solutionName)