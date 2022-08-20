const listSolutions = document.querySelector('#list_solution')

let numberSolution = ''
let solutionCodeHTML = ''

for (let i=0; i<solutionAmount; i++) {
    numberSolution++

    solutionCodeHTML = `<div class='button_box'>
            <button class='button'>Решение ${numberSolution}</button>
        </div>
    `
    if (listSolutions) listSolutions.insertAdjacentHTML('beforeend', solutionCodeHTML)
}