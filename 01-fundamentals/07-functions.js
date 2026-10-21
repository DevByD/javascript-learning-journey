/*
DAY 5 - FUNCTIONS
File: 07-functions.js
*/

// 1. Basic function
function greet() {
    console.log("Hello, JavaScript!");
}

greet();

// 2. Function with parameters
function greetUser(name) {
    console.log("Hello, " + name + "!");
}

greetUser("Dharesh");
greetUser("Rahul");

// 3. Function with two parameters
function add(a, b) {
    return a + b;
}

console.log("Addition:", add(10, 20));

// 4. Return a value
function calculateArea(length, width) {
    return length * width;
}

console.log("Area:", calculateArea(5, 4));

// 5. Function expression
const multiply = function(a, b) {
    return a * b;
};

console.log("Multiplication:", multiply(4, 5));

// 6. Practice challenge
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    }

    return "Odd";
}

console.log("10 is:", checkEvenOrOdd(10));
console.log("7 is:", checkEvenOrOdd(7));