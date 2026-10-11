// ==================================
// 1. String
// ==================================

const firstName = "Dharesh";
const city = 'Bengaluru';
const language = `JavaScript`;

console.log(firstName);
console.log(city);
console.log(language);

console.log("Hello " + firstName);

console.log(`I am learning ${language}`);


// ==================================
// 2. Number
// ==================================

const age = 21;
const price = 99.50;
const temperature = -5;

console.log(age);
console.log(price);
console.log(temperature);

console.log(20 + 5);
console.log(20 - 5);
console.log(20 * 5);
console.log(20 / 5);
console.log(20 % 5);

console.log(10 / 0);      // Infinity
console.log("hello" * 2); // NaN


// ==================================
// 3. Boolean
// ==================================

const isStudent = true;
const hasJob = false;

console.log(isStudent);
console.log(hasJob);

const canVote = age >= 18;
console.log("Can vote:", canVote);


// ==================================
// 4. Undefined
// ==================================

let result;

console.log(result);
console.log(typeof result);

const student = {
    name: "Dharesh"
};

console.log(student.name);
console.log(student.age); // undefined


// ==================================
// 5. Null
// ==================================

let selectedUser = null;

console.log(selectedUser);
console.log(typeof selectedUser); // object

selectedUser = "Dharesh";

console.log(selectedUser);


// ==================================
// 6. BigInt
// ==================================

const largeNumber = 9007199254740993n;

console.log(largeNumber);
console.log(typeof largeNumber);

const anotherLargeNumber = BigInt("12345678901234567890");

console.log(anotherLargeNumber);


// ==================================
// 7. Symbol
// ==================================

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2); // false
console.log(typeof id1);  // symbol


// ==================================
// 8. Object
// ==================================

const studentDetails = {
    name: "Dharesh",
    age: 21,
    course: "Engineering"
};

console.log(studentDetails);
console.log(studentDetails.name);
console.log(studentDetails.age);
console.log(studentDetails.course);


// ==================================
// 9. Array
// ==================================

const skills = ["HTML", "CSS", "JavaScript"];

console.log(skills);
console.log(skills[0]);
console.log(skills[1]);
console.log(skills[2]);

skills.push("React");

console.log("Updated skills:", skills);
console.log("Is array:", Array.isArray(skills));


// ==================================
// 10. Function
// ==================================

function greet() {
    console.log("Hello, developer!");
}

greet();

console.log(typeof greet); // function


// ==================================
// 11. typeof examples
// ==================================

console.log(typeof "Hello");      // string
console.log(typeof 100);          // number
console.log(typeof true);         // boolean
console.log(typeof undefined);    // undefined
console.log(typeof 123n);         // bigint
console.log(typeof Symbol("id")); // symbol
console.log(typeof {});            // object
console.log(typeof []);            // object
console.log(typeof null);          // object