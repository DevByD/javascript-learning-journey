// ==================================
// 1. String to Number
// ==================================

const ageText = "21";
const age = Number(ageText);

console.log("Age:", age);
console.log("Type:", typeof age);


// ==================================
// 2. Number to String
// ==================================

const price = 500;
const priceText = String(price);

console.log("Price:", priceText);
console.log("Type:", typeof priceText);


// ==================================
// 3. String to Boolean
// ==================================

console.log(Boolean("Hello")); // true
console.log(Boolean(""));      // false
console.log(Boolean("0"));     // true


// ==================================
// 4. Number to Boolean
// ==================================

console.log(Boolean(1));  // true
console.log(Boolean(100)); // true
console.log(Boolean(0));  // false


// ==================================
// 5. Implicit Type Conversion
// ==================================

console.log("5" + 2); // "52"
console.log("5" - 2); // 3
console.log("5" * 2); // 10
console.log("5" / 2); // 2.5


// ==================================
// 6. == versus ===
// ==================================

console.log(5 == "5");  // true
console.log(5 === "5"); // false

console.log(10 != "10");  // false
console.log(10 !== "10"); // true


// ==================================
// 7. Truthy and Falsy Values
// ==================================

console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

console.log(Boolean("JavaScript")); // true
console.log(Boolean("0"));          // true
console.log(Boolean([]));           // true
console.log(Boolean({}));           // true


// ==================================
// 8. Practical Example: User Input
// ==================================

const inputAge = "20";
const convertedAge = Number(inputAge);

console.log("Entered age:", inputAge);
console.log("Converted age:", convertedAge);
console.log("Can vote:", convertedAge >= 18);


// ==================================
// 9. Handling Invalid Numeric Input
// ==================================

const input = "hello";
const convertedValue = Number(input);

console.log("Converted value:", convertedValue);
console.log("Is invalid number:", Number.isNaN(convertedValue));