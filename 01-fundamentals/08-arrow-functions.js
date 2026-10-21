/*
DAY 5 - ARROW FUNCTIONS
File: 08-arrow-functions.js
*/

// 1. Basic arrow function
const greet = () => {
    console.log("Hello from an arrow function!");
};

greet();

// 2. Arrow function with parameters
const greetUser = (name) => {
    console.log("Hello, " + name + "!");
};

greetUser("Dharesh");

// 3. Return a value
const add = (a, b) => {
    return a + b;
};

console.log("Addition:", add(15, 5));

// 4. Implicit return
const square = number => number * number;

console.log("Square:", square(6));

// 5. Convert Celsius to Fahrenheit
const toFahrenheit = celsius => (celsius * 9 / 5) + 32;

console.log("30°C in Fahrenheit:", toFahrenheit(30));

// 6. Practice challenge
const findMaximum = (a, b) => a > b ? a : b;

console.log("Maximum:", findMaximum(25, 40));