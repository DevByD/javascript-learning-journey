// ==================================
// 1. Arithmetic Operators
// ==================================

let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
console.log("Exponentiation:", a ** b);


// ==================================
// 2. Assignment Operators
// ==================================

let score = 10;

score += 5;
console.log("After += 5:", score);

score -= 3;
console.log("After -= 3:", score);

score *= 2;
console.log("After *= 2:", score);

score /= 4;
console.log("After /= 4:", score);


// ==================================
// 3. Comparison Operators
// ==================================

console.log("10 > 5:", 10 > 5);
console.log("10 < 5:", 10 < 5);
console.log("10 >= 10:", 10 >= 10);
console.log("5 <= 3:", 5 <= 3);
console.log("5 === 5:", 5 === 5);
console.log("5 !== 3:", 5 !== 3);


// ==================================
// 4. Logical Operators
// ==================================

const age = 21;
const hasId = true;

console.log("Can enter:", age >= 18 && hasId);
console.log("At least one condition:", age >= 18 || hasId);
console.log("NOT hasId:", !hasId);


// ==================================
// 5. Increment and Decrement
// ==================================

let count = 5;

count++;
console.log("After increment:", count);

count--;
console.log("After decrement:", count);


// ==================================
// 6. Practical Example: Shopping Bill
// ==================================

const product1 = 500;
const product2 = 300;
const product3 = 200;

const total = product1 + product2 + product3;

console.log("Product 1:", product1);
console.log("Product 2:", product2);
console.log("Product 3:", product3);
console.log("Total bill:", total);


// ==================================
// 7. Practical Example: Eligibility
// ==================================

const studentAge = 20;
const hasStudentID = true;

const eligible = studentAge >= 18 && hasStudentID;

console.log("Eligible:", eligible);