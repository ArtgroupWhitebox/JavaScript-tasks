const containerTodo = document.getElementById('container_todo')

let locationTask = window.location.search

let pathTask = ''
let functionNameСode = ''
let сonsoleСode = ''

if (locationTask === '?task_1') pathTask = './1_isUniqumElem/isUniq_optimize_Set.js'
if (locationTask === '?task_2') pathTask = './2_flatten/flat_metod.js'
if (locationTask === '?task_3') pathTask = './3_removeDupes/removeDupes_cpu_1.js'
if (locationTask === '?task_4') pathTask = './4_highestFrequency/highestFrequency_ram.js'
if (locationTask === '?task_5') pathTask = './5_isStringRotated/isStringRotated_includes.js'
if (locationTask === '?task_6') pathTask = './6_arraySubset/arraySubset_indexOf_1.js'
if (locationTask === '?task_7') pathTask = './7_allAnagrams/allAnagrams_sort.js'
if (locationTask === '?task_8') pathTask = './8_rotate_matrix/rotate_matrix_new_matrix.js'
if (locationTask === '?task_9') pathTask = './9_search_number/search_number_indexOf.js'
if (locationTask === '?task_10') pathTask = './10_isBalanced/isBalanced.js'
if (locationTask === '?task_11') pathTask = './11_queue/queueOOP.js'
if (locationTask === '?task_12') pathTask = './12_deepEqual/deepEqual.js'

fetch(pathTask)
    .then(result => result.text())
    .then(result => {
        functionNameСode = result.slice(0, result.indexOf('{')+1)        
        сonsoleСode = result.slice(result.indexOf('?')+1)

        const codeHTML = `<pre class='box_todo'><code class='language-js todo'>${functionNameСode} 
    // todo\n} 
${сonsoleСode}</code></pre>`

        if (containerTodo) {
            containerTodo.insertAdjacentHTML('afterbegin', codeHTML) 
            Prism.highlightAll()
        }
    }
)