const buttonBox = document.getElementById('button_box')

let locationSearch = window.location.search  
let hrefLink = ''

if (locationSearch === '?task_1') hrefLink = `index_solution.html${locationSearch}`
if (locationSearch === '?task_2') hrefLink = `index_solution.html${locationSearch}`
if (locationSearch === '?task_3') hrefLink = `index_solution.html${locationSearch}`
if (locationSearch === '?task_4') hrefLink = `index_solution.html${locationSearch}`
if (locationSearch === '?task_5') hrefLink = `index_solution.html${locationSearch}`
if (locationSearch === '?task_6') hrefLink = `index_solution.html${locationSearch}`
if (locationSearch === '?task_7') hrefLink = `index_solution.html${locationSearch}`
if (locationSearch === '?task_8') hrefLink = `index_solution.html${locationSearch}`
if (locationSearch === '?task_9') hrefLink = `index_solution.html${locationSearch}`
if (locationSearch === '?task_10') hrefLink = `index_solution.html${locationSearch}`
if (locationSearch === '?task_11') hrefLink = `index_solution.html${locationSearch}`
if (locationSearch === '?task_12') hrefLink = `index_solution.html${locationSearch}`

const buttonCodeHTML = `<button class='button'>
    <a href=${hrefLink} class='button_link'>Решение</a>
</button>`

if (buttonBox) buttonBox.insertAdjacentHTML('afterbegin', buttonCodeHTML)