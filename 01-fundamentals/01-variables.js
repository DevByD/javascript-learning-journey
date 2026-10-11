// ==================================
// 1. Using let
// ==================================

let age = 21;
console.log("Original age:", age);

age = 22;
console.log("Updated age:", age);


// ==================================
// 2. Using const
// ==================================

const language = "JavaScript";
console.log("Language:", language);

// This would cause an error:
// language = "Python";


// ==================================
// 3. Using var
// ==================================

var city = "Bengaluru";
console.log("City:", city);

city = "Mysuru";
console.log("Updated city:", city);


// ==================================
// 4. Variable naming
// ==================================

let firstName = "Dharesh";
let total_marks = 90;
let $price = 500;
let _count = 10;

console.log(firstName);
console.log(total_marks);
console.log($price);
console.log(_count);


// ==================================
// 5. Variables are case-sensitive
// ==================================

let score = 50;
let Score = 100;

console.log("score:", score);
console.log("Score:", Score);


// ==================================
// 6. Student details
// ==================================

const studentName = "Dharesh";
let studentAge = 21;
const course = "Engineering";

console.log("Student:", studentName);
console.log("Age:", studentAge);
console.log("Course:", course);


// ==================================
// 7. Marks calculation
// ==================================

let maths = 90;
let science = 85;
let english = 88;

let total = maths + science + english;

console.log("Total marks:", total);


// ==================================
// 8. Shopping bill
// ==================================

const item = "Keyboard";
const price = 1200;
let quantity = 2;

const totalPrice = price * quantity;

console.log("Item:", item);
console.log("Price:", price);
console.log("Quantity:", quantity);
console.log("Total price:", totalPrice);


// ==================================
// 9. Increment and decrement
// ==================================

let count = 0;

count++;
console.log("After increment:", count);

count++;
console.log("After increment:", count);

count--;
console.log("After decrement:", count);


// ==================================
// 10. Array with const
// ==================================

const skills = ["HTML", "CSS"];

skills.push("JavaScript");

console.log("Skills:", skills);

// The array can be modified.
// Reassigning skills to another array is not allowed.