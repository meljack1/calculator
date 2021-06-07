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

function operate(no1, no2, operator) {
    const a = Number(no1);
    const b = Number(no2);
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
        case null: 
            return a;
            break;
    }
}

const calculator = {
    no1: "",
    no2: "",
    operator: null,
    isSum: false,
    decimal: false
}; 

function addNumber(number) {
    if (calculator.isSum && calculator.operator == null) {
        document.getElementById("display").textContent = "";
        calculator.isSum = false;
        calculator.decimal = false;
        calculator.no1 = "";
    }
    if (calculator.operator) {
        calculator.no2 += number;
    } else {
        calculator.no1 += number;
    }
}

const one = document.querySelector('#one');
one.addEventListener('click', () => {
    addNumber("1");
    document.getElementById("display").textContent += "1";
});

const two = document.querySelector('#two');
two.addEventListener('click', () => {
    addNumber("2");
    document.getElementById("display").textContent += "2";
});

const three = document.querySelector('#three');
three.addEventListener('click', () => {
    addNumber("3");
    document.getElementById("display").textContent += "3";
});

const four = document.querySelector('#four');
four.addEventListener('click', () => {
    addNumber("4");
    document.getElementById("display").textContent += "4";
});

const five = document.querySelector('#five');
five.addEventListener('click', () => {
    addNumber("5");
    document.getElementById("display").textContent += "5";
});

const six = document.querySelector('#six');
six.addEventListener('click', () => {
    addNumber("6");
    document.getElementById("display").textContent += "6";
});

const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    addNumber("7");
    document.getElementById("display").textContent += "7";
});

const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    addNumber("8");
    document.getElementById("display").textContent += "8";
});

const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    addNumber("9");
    document.getElementById("display").textContent += "9";
});

const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    addNumber("0");
    document.getElementById("display").textContent += "0";
});

const addButton = document.querySelector('#add');
addButton.addEventListener('click', () => {
    if (calculator.operator == null) {
        calculator.operator = "add";
        calculator.decimal = false;
        document.getElementById("display").textContent += "+";
    }
});

const multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', () => {
    if (calculator.operator == null) {
        calculator.operator = "multiply";
        calculator.decimal = false;
        document.getElementById("display").textContent += "×";
    }
});

const divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', () => {
    if (calculator.operator == null) {
        calculator.operator = "divide";
        calculator.decimal = false;
        document.getElementById("display").textContent += "÷";
    }
});

const minusButton = document.querySelector('#minus');
minusButton.addEventListener('click', () => {
    if (calculator.operator == null) {
        calculator.operator = "subtract";
        calculator.decimal = false;
        document.getElementById("display").textContent += "-";
    }
});

const decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener('click', () => {
    if (calculator.decimal == false) {
        calculator.decimal = "true";
        document.getElementById("display").textContent += ".";
        addNumber(".");
    }
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    document.getElementById("display").textContent = "";
    calculator.no1 = "";
    calculator.no2 = "";
    calculator.operator = null;
    calculator.isSum = false;
    calculator.decimal = false;
});

const undoButton = document.querySelector('#undo');
undoButton.addEventListener('click', () => {
    const string = document.getElementById("display").textContent;
    document.getElementById("display").textContent = string.substring(0, string.length-1);
    if (calculator.no2 != "") {
        const num2 = calculator.no2;
        calculator.no2 = num2.substring(0, num2.length - 1);
    } else if (calculator.operator != null) {
        calculator.operator = null;
    } else if (calculator.no1 != "") {
        const num1 = calculator.no1;
        calculator.no1 = num1.substring(0, num1.length - 1);
    }
})
 
const equalsButton = document.querySelector('#equals'); 
equalsButton.addEventListener('click', () => {
    if (calculator.no2 * 10 == 0 && calculator.operator == "divide") {
        alert("You will pay gravely for your transgressions.");
        calculator.no1 = "";
        calculator.no2 = "";
        calculator.operator = null;
        document.getElementById("display").textContent = "";
    } else {
        const sum = operate(calculator.no1, calculator.no2, calculator.operator); 
        document.getElementById("display").textContent = Number((sum).toFixed(3));
        calculator.no1 = sum.toString();
        calculator.no2 = "";
        calculator.operator = null;
        calculator.isSum = true;
    }
});

 