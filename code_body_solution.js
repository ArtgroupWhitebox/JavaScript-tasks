let locationSearchSolution = window.location.search

let codeBodySolution = ''
let arrSolutionPaths = []

if (locationSearchSolution === '?task_1') {
    arrSolutionPaths = [
        '/1_isUniqumElem/isUniq_optimize_Set.js',
       '/1_isUniqumElem/isUniq_optimize_includes.js',
       '/1_isUniqumElem/isUniq_optimize_indexOf.js',
       '/1_isUniqumElem/isUniq_optimize_ram.js',
       '/1_isUniqumElem/isUniq_optimize_cpu.js',
       '/1_isUniqumElem/isUniq.js'       
    ]
}

if (locationSearchSolution === '?task_2') {
    arrSolutionPaths = [
       '/2_flatten/flat_metod.js',
       '/2_flatten/flat_recursion.js'
    ]
}

if (locationSearchSolution === '?task_3') {
    arrSolutionPaths = [
       '/3_removeDupes/removeDupes_Set_spread.js',
       '/3_removeDupes/removeDupes_Set_Array.from.js',
       '/3_removeDupes/removeDupes_ram.js',
       '/3_removeDupes/removeDupes_cpu_1.js',
       '/3_removeDupes/removeDupes_cpu_2.js',
       '/3_removeDupes/removeDupes_cpu_3.js'
    ]
}

if (locationSearchSolution === '?task_4') {
    arrSolutionPaths = [
       '/4_highestFrequency/highestFrequency_ram.js'
    ]
}

if (locationSearchSolution === '?task_5') {
    arrSolutionPaths = [
       '/5_isStringRotated/isStringRotated_includes.js',
       '/5_isStringRotated/isStringRotated_slice.js',
       '/5_isStringRotated/isStringRotated_cpu.js'       
    ]
}

if (locationSearchSolution === '?task_6') {
    arrSolutionPaths = [
       '/6_arraySubset/arraySubset_indexOf_1.js',
       '/6_arraySubset/arraySubset_indexOf_2.js'    
    ]
}

if (locationSearchSolution === '?task_7') {
    arrSolutionPaths = [
       '/7_allAnagrams/allAnagrams_sort.js',
       '/7_allAnagrams/allAnagrams_every.js',
       '/7_allAnagrams/allAnagrams_for.js',
       '/7_allAnagrams/allAnagrams_cpu.js'    
    ]
}

if (locationSearchSolution === '?task_8') {
    arrSolutionPaths = [
       '/8_rotate_matrix/rotate_matrix_cpu.js',
       '/8_rotate_matrix/rotate_matrix_new_matrix.js',
       '/8_rotate_matrix/rotate_matrix_reverse.js'  
    ]
}

if (locationSearchSolution === '?task_9') {
    arrSolutionPaths = [
       '/9_search_number/search_number_indexOf.js',
       '/9_search_number/search_number.js',
       '/9_search_number/search_optimize_binary.js'  
    ]
}

if (locationSearchSolution === '?task_10') {
    arrSolutionPaths = [
       '/10_isBalanced/isBalanced.js',
       '/10_isBalanced/isBalanced_match.js'  
    ]
}

if (locationSearchSolution === '?task_11') {
    arrSolutionPaths = [
       '/11_queue/queue.js',
       '/11_queue/queueOOP.js',
       '/11_queue/queue_auto.js'
    ]
}

if (locationSearchSolution === '?task_12') {
    arrSolutionPaths = [
       '/12_deepEqual/deepEqual.js'
    ]
}


const containerListSolutions = document.querySelector('#list_solution')
const arrSolutionButtons = containerListSolutions.querySelectorAll('.button')

for (let i=0; i<arrSolutionPaths.length; i++) {
    fetch(arrSolutionPaths[i])
        .then(result => result.text())
        .then(result => {
            codeBodySolution = result.replace(/</g, '&lt')            
            const codeHTMLSolution = `<pre id='box_todo_${i}' class='box_todo'><code class='language-js todo'>${codeBodySolution}</code></pre>`
            let toggleSolution = false                         
            if (arrSolutionButtons[i]) {              
                arrSolutionButtons[i].addEventListener('click', function () {
                    if (!toggleSolution) {
                    arrSolutionButtons[i].insertAdjacentHTML('afterend', codeHTMLSolution)
                    Prism.highlightAll()
                    toggleSolution = true                    
                    } else {      
                        const idElBoxTodo = document.getElementById(`box_todo_${i}`)        
                        idElBoxTodo.remove()
                        toggleSolution = false                        
                    }
                }, false)
            }  
        }
    ) 
}