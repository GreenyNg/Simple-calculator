let screen = document.getElementById('result');

function addValue(value) {
    screen.innerText += value;
}

function clearScreen() {
    screen.innerText = '';
}

function calculate() {
    let result = eval(screen.innerText);
    screen.innerText = result;
}
