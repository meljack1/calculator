function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b; 
}

function operate(operator, no1, no2) {
    let a = Number(no1);
    let b = Number(no2);
    switch(operator) {
        case "add": 
            return add(a, b);
            break;
        case "subtract": 
            return subtract(a, b);
            break;
        case "multiply":
            return multiply(a, b);
            break;
        case "divide":
            return divide(a, b);
            break;
    }
}

const screen = document.querySelector('#screen')


const one = document.querySelector('#one');
one.addEventListener('click', () => {
    document.getElementById("display").textContent += "1";
});

const two = document.querySelector('#two');
two.addEventListener('click', () => {
    document.getElementById("display").textContent += "2";
});

const three = document.querySelector('#three');
three.addEventListener('click', () => {
    document.getElementById("display").textContent += "3";
});

const four = document.querySelector('#four');
four.addEventListener('click', () => {
    document.getElementById("display").textContent += "4";
});

const five = document.querySelector('#five');
five.addEventListener('click', () => {
    document.getElementById("display").textContent += "5";
});

const six = document.querySelector('#six');
six.addEventListener('click', () => {
    document.getElementById("display").textContent += "6";
});

const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    document.getElementById("display").textContent += "7";
});

const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    document.getElementById("display").textContent += "8";
});

const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    document.getElementById("display").textContent += "9";
});

const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    document.getElementById("display").textContent += "0";
});

const addButton = document.querySelector('#add');
addButton.addEventListener('click', () => {
    document.getElementById("display").textContent += "+";
});

const multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', () => {
    document.getElementById("display").textContent += "×";
});

const divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', () => {
    document.getElementById("display").textContent += "÷";
});

const minusButton = document.querySelector('#minus');
minusButton.addEventListener('click', () => {
    document.getElementById("display").textContent += "-";
});

 