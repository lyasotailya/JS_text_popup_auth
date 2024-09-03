let text = document.querySelector('#editor')
let storedText = localStorage.getItem('text')

text.addEventListener('input', function(e) {
    storedText ? localStorage.text = JSON.stringify(e.target.value) : localStorage.setItem('text', JSON.stringify(e.target.value))
})

localStorage.text ? text.value = JSON.parse(localStorage.text) : false