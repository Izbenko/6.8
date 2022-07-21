document.querySelector('#consoleLog').addEventListener('click', () => {
        alert('Выводит сообщение в веб-консоль.');
    })

document.querySelector('#alert').addEventListener('click', () => {
    alert('Показывает сообщение и ждёт, пока пользователь нажмёт кнопку «ОК».');
})

document.querySelector('#prompt').addEventListener('click', () => {
    alert('Показывает сообщение и ждёт, пока пользователь введет текст нажмёт кнопку «ОК».');
})