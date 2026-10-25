/*
DAY 7 - OBJECT METHODS
File: 12-object-methods.js
*/

// 1. Create an object with methods
const employee = {
    name: "Rahul",
    salary: 30000,

    introduce() {
        console.log(`My name is ${this.name}`);
    },

    getAnnualSalary() {
        return this.salary * 12;
    }
};

employee.introduce();

console.log("Annual salary:", employee.getAnnualSalary());

// 2. Built-in object methods
console.log("Keys:", Object.keys(employee));
console.log("Values:", Object.values(employee));
console.log("Entries:", Object.entries(employee));

// 3. Object with a calculation method
const calculator = {
    a: 10,
    b: 5,

    add() {
        return this.a + this.b;
    },

    multiply() {
        return this.a * this.b;
    }
};

console.log("Sum:", calculator.add());
console.log("Product:", calculator.multiply());

// 4. Practice challenge
const mobile = {
    brand: "Samsung",
    price: 20000,

    applyDiscount(discount) {
        return this.price - (this.price * discount / 100);
    }
};

console.log("Price after 10% discount:", mobile.applyDiscount(10));