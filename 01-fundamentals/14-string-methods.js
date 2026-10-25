/*
DAY 8 - STRING METHODS
File: 14-string-methods.js
*/

// 1. Change letter case
const language = "JavaScript";

console.log("Uppercase:", language.toUpperCase());
console.log("Lowercase:", language.toLowerCase());

// 2. Remove whitespace
const userInput = "   Dharesh   ";

console.log("Before trim:", userInput);
console.log("After trim:", userInput.trim());

// 3. Search within a string
const sentence = "I am learning JavaScript";

console.log("Includes JavaScript:", sentence.includes("JavaScript"));
console.log("Index of JavaScript:", sentence.indexOf("JavaScript"));

// 4. Extract part of a string
console.log("Slice:", language.slice(0, 4));

// 5. Replace text
console.log(sentence.replace("JavaScript", "React"));

// 6. Split a string into an array
const skills = "HTML,CSS,JavaScript,React";

console.log("Skills array:", skills.split(","));

// 7. Check whether a string starts or ends with text
console.log(language.startsWith("Java"));
console.log(language.endsWith("Script"));

// 8. Practice challenge
const email = "  STUDENT@EXAMPLE.COM  ";

const cleanedEmail = email.trim().toLowerCase();

console.log("Clean email:", cleanedEmail);
console.log("Contains @:", cleanedEmail.includes("@"));