let input = document.querySelector('#input');
let text = document.querySelector('#duplicateField');
let button = document.querySelector('#button');

input.addEventListener('keypress',
    function (event) {
        text.textContent = text.textContent + String.fromCharCode(event.charCode);
    })

button.addEventListener('click',
    function (event) {
    event.preventDefault();
    console.log(input.value);
    input.value = '';
    text.textContent = '';
})