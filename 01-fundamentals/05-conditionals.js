// ==================================
// 1. if statement
// ==================================

const age = 20;

if (age >= 18) {
    console.log("You are an adult.");
}


// ==================================
// 2. if...else statement
// ==================================

const number = 7;

if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}


// ==================================
// 3. else if statement: Grades
// ==================================

const marks = 85;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


// ==================================
// 4. Positive, Negative, or Zero
// ==================================

const value = -5;

if (value > 0) {
    console.log("Positive number");
} else if (value < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}


// ==================================
// 5. Nested if
// ==================================

const studentAge = 20;
const hasID = true;

if (studentAge >= 18) {
    if (hasID) {
        console.log("Entry allowed");
    } else {
        console.log("Please show your ID");
    }
} else {
    console.log("Entry not allowed");
}


// ==================================
// 6. switch statement
// ==================================

const day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend or invalid day");
}


// ==================================
// 7. Ternary operator
// ==================================

const userAge = 19;

const message = userAge >= 18
    ? "Adult"
    : "Minor";

console.log(message);


// ==================================
// 8. Login condition
// ==================================

const username = "developer";
const passwordCorrect = true;

if (username === "developer" && passwordCorrect) {
    console.log("Login successful");
} else {
    console.log("Login failed");
}