function sumArray(array) {
    let sum = 0
    for (let index = 0; index < array.length; index++) {
        sum = sum + array[index];
    }
    return sum
}

const arr = [1, 2, 3, 4, 5]
console.log(sumArray(arr))

const message = document.querySelector('.message--js')

if (localStorage["content"])
{
    console.log('Content already exists. Loading...')
    let content = localStorage["content"] ;
    message.value = content ;
    console.log('Data read from previous visit')
}

const saveButton = document.querySelector('.save-ls--js')
saveButton.addEventListener('click', () => {
    localStorage.setItem('content', message.value)
    console.log("Data saved to Local Storage")
})

const loadButton = document.querySelector('.load-ls--js')
loadButton.addEventListener('click', () => {
    message.value = localStorage.getItem('content')
    console.log("Data read from Local Storage")
})
