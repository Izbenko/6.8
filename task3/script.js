const green = document.querySelector('#green');
const yellow = document.querySelector('#yellow');
const red = document.querySelector('#red');

function makeGreen() {
    green.style.background = ('green');
    red.style.background = '';
    yellow.style.background = '';
    green.removeEventListener('click', makeGreen);
    yellow.removeEventListener('click', makeGreen);
    red.removeEventListener('click', makeGreen);
    green.addEventListener('click', makeYellow);
    yellow.addEventListener('click', makeYellow);
    red.addEventListener('click', makeYellow);
}

function makeYellow() {
    yellow.style.background = ('yellow');
    red.style.background = '';
    green.style.background = '';
    yellow.removeEventListener('click', makeYellow);
    green.removeEventListener('click', makeYellow);
    red.removeEventListener('click', makeYellow);
    yellow.addEventListener('click', makeRed);
    green.addEventListener('click', makeRed);
    red.addEventListener('click', makeRed);
}

function makeRed() {
    red.style.background = ('red');
    green.style.background = '';
    yellow.style.background = '';
    red.removeEventListener('click', makeRed);
    green.removeEventListener('click', makeRed);
    yellow.removeEventListener('click', makeRed);
    red.addEventListener('click', makeGreen);
    green.addEventListener('click', makeGreen);
    yellow.addEventListener('click', makeGreen);
}

green.addEventListener('click', makeGreen);
yellow.addEventListener('click', makeGreen);
red.addEventListener('click', makeGreen);

