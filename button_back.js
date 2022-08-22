const buttonTopicsBox = document.getElementById('button_topics_box')
const buttonBackspaceBox = document.getElementById('button_backspace_box')
const buttonUpTopBox = document.getElementById('button_up_top_box')

let locSearch = window.location.search  
let link = ''

if (locSearch === '?task_1') link = `index_task.html${locSearch}`
if (locSearch === '?task_2') link = `index_task.html${locSearch}`
if (locSearch === '?task_3') link = `index_task.html${locSearch}`
if (locSearch === '?task_4') link = `index_task.html${locSearch}`
if (locSearch === '?task_5') link = `index_task.html${locSearch}`
if (locSearch === '?task_6') link = `index_task.html${locSearch}`
if (locSearch === '?task_7') link = `index_task.html${locSearch}`
if (locSearch === '?task_8') link = `index_task.html${locSearch}`
if (locSearch === '?task_9') link = `index_task.html${locSearch}`
if (locSearch === '?task_10') link = `index_task.html${locSearch}`
if (locSearch === '?task_11') link = `index_task.html${locSearch}`
if (locSearch === '?task_12') link = `index_task.html${locSearch}`

const buttonTopicsCodeHTML = `<button class='button_back'>
    <a href='index.html' class='button_link_topic'>Темы</a>
</button>`

const buttonBackspaceCodeHTML = `<button class='button_back'>
    <a href='${link}' class='button_link_back'><</a>
</button>`

const buttonUpTopCodeHTML = `<button id='button_up_top' class='button_up_top'>^</button>`

if (buttonTopicsBox) buttonTopicsBox.insertAdjacentHTML('afterbegin', buttonTopicsCodeHTML)
if (buttonBackspaceBox) buttonBackspaceBox.insertAdjacentHTML('afterbegin', buttonBackspaceCodeHTML)


if (buttonUpTopBox) {
    buttonUpTopBox.insertAdjacentHTML('afterbegin', buttonUpTopCodeHTML)
    const buttonUpTop = document.getElementById('button_up_top')
    buttonUpTop.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
}