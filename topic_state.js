const topicState = [
    {'Строки и массивы': [
        '1 - Уникальность всех символов в строке',
        '2 - Плоский массив',
        '3 - Удаление всех повторяющихся значений в строке',
        '4 - Какая строка встречается чаще всего',
        '5 - Повернута ли строка?',
        '6 - Является ли массив подмножеством другого массива',
        '7 - Анаграммы',
        '8 - Перевернуть матрицу'
        ]
    },
    {'Алгоритмы': [
        '9 - Простой поиск',
        '10 - Сбалансированные скобки',
        '11 - Очередь с О(1) сложностью операций'
        ]
    },
    {'JavaScript': [
        '12 - Строгое равенство',
        ]
    }
]

let numberTask = null 
for (let i=0; i<topicState.length; i++) {
      
    for (let key in topicState[i]) {
        const containerTopic = document.getElementById('container_topic')
        const codeHTMLTopicBox = `<div id='topic_box${i}' class='topic_box'>
            <div class='h2_topic'>${key}</div>
        </div>`
    
        containerTopic.insertAdjacentHTML('beforeend', codeHTMLTopicBox)        

        for (let j=0; j<topicState[i][key].length; j++) {
            numberTask++  
            const topicBox = document.getElementById(`topic_box${i}`)  
            const codeHTMLTopic = `<div class='link_box'>
                <a href='index_task.html?task_${numberTask}' class='link'>${topicState[i][key][j]}</a> 
            </div>`
    
            topicBox.insertAdjacentHTML('beforeend', codeHTMLTopic) 
        }
    }
}