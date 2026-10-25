/*
DAY 8 - STRINGS
File: 13-strings.js
*/

// 1. Create strings
const firstName = "Dharesh";
const language = "JavaScript";
const message = `I am learning ${language}`;

console.log("Name:", firstName);
console.log("Language:", language);
console.log("Message:", message);

// 2. String length
console.log("Name length:", firstName.length);

// 3. Access characters
console.log("First character:", firstName[0]);
console.log("Last character:", firstName[firstName.length - 1]);

// 4. Concatenation
const greeting = "Hello, " + firstName + "!";
console.log(greeting);

// 5. Template literals
const day = 8;
console.log(`Welcome to Day ${day} of my JavaScript journey!`);

// 6. Multiline string
const introduction = `My name is ${firstName}.
I am learning ${language}.
I am building my skills every day.`;

console.log(introduction);

// 7. Practice challenge
const city = "Bengaluru";
const country = "India";

console.log(`I live in ${city}, ${country}.`);
console.log("Total city name characters:", city.length);