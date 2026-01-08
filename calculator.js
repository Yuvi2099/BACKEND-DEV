// Addition
function add(a, b) {
    return a + b;
}

// Subtraction
function subtract(a, b) {
    return a - b;
}

// Multiplication
function multiply(a, b) {
    return a * b;
}

// Division
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed";
    }
    return a / b;
}

function power(base, exponent) {
    return Math.pow(base, exponent);
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    power
};
