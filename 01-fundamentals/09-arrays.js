/*
DAY 6 - ARRAYS
File: 09-arrays.js
*/

// 1. Create an array
const languages = ["JavaScript", "Python", "Java", "C++"];

console.log("Languages:", languages);

// 2. Access array elements
console.log("First language:", languages[0]);
console.log("Second language:", languages[1]);

// 3. Find array length
console.log("Total languages:", languages.length);

// 4. Update an element
languages[1] = "TypeScript";
console.log("Updated languages:", languages);

// 5. Loop through an array
for (let i = 0; i < languages.length; i++) {
    console.log(languages[i]);
}

// 6. Use for...of
for (const language of languages) {
    console.log("Learning:", language);
}

// 7. Practice challenge
const marks = [85, 92, 78, 88, 95];

let total = 0;

for (const mark of marks) {
    total += mark;
}

const average = total / marks.length;

console.log("Total marks:", total);
console.log("Average marks:", average);