/*
DAY 6 - ARRAY METHODS
File: 10-array-methods.js
*/

const tasks = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

console.log("Original:", tasks);

// Add and remove elements
tasks.push("Learn React");
console.log("After push:", tasks);

tasks.pop();
console.log("After pop:", tasks);

tasks.unshift("Learn Git");
console.log("After unshift:", tasks);

tasks.shift();
console.log("After shift:", tasks);

// Search methods
console.log("Has CSS?", tasks.includes("Learn CSS"));
console.log("JavaScript index:", tasks.indexOf("Learn JavaScript"));

// slice() - returns a portion without modifying tasks
const selectedTasks = tasks.slice(0, 2);
console.log("Selected tasks:", selectedTasks);
console.log("Original after slice:", tasks);

// splice() - removes elements from the original array
tasks.splice(1, 1);
console.log("After splice:", tasks);

// Practice challenge
const prices = [100, 250, 75, 300];

prices.push(150);
prices.splice(0, 1);

console.log("Updated prices:", prices);