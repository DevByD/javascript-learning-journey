// ==================================
// 1. for loop
// ==================================

for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}


// ==================================
// 2. Print even numbers
// ==================================

for (let i = 2; i <= 20; i += 2) {
    console.log("Even:", i);
}


// ==================================
// 3. Sum from 1 to 100
// ==================================

let total = 0;

for (let i = 1; i <= 100; i++) {
    total += i;
}

console.log("Sum from 1 to 100:", total);


// ==================================
// 4. Multiplication table
// ==================================

const number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}


// ==================================
// 5. while loop
// ==================================

let count = 1;

while (count <= 5) {
    console.log("While count:", count);
    count++;
}


// ==================================
// 6. do...while loop
// ==================================

let value = 1;

do {
    console.log("Do-while value:", value);
    value++;
} while (value <= 5);


// ==================================
// 7. break statement
// ==================================

for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break;
    }

    console.log("Break example:", i);
}


// ==================================
// 8. continue statement
// ==================================

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log("Continue example:", i);
}


// ==================================
// 9. Countdown
// ==================================

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("Countdown finished!");


// ==================================
// 10. Practical example: Shopping
// ==================================

const prices = [100, 200, 300];
let bill = 0;

for (let i = 0; i < prices.length; i++) {
    bill += prices[i];
}

console.log("Total shopping bill:", bill);