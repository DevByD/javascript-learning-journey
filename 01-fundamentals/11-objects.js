/*
DAY 7 - OBJECTS
File: 11-objects.js
*/

// 1. Create a student object
const student = {
    name: "Dharesh",
    age: 21,
    branch: "IoT",
    college: "Presidency University"
};

// 2. Access properties
console.log("Name:", student.name);
console.log("Age:", student["age"]);
console.log("Branch:", student.branch);

// 3. Update a property
student.age = 22;
console.log("Updated age:", student.age);

// 4. Add a property
student.skills = ["HTML", "CSS", "JavaScript"];
console.log("Skills:", student.skills);

// 5. Delete a property
delete student.branch;

// 6. Display the final object
console.log("Student details:", student);

// 7. Practice challenge
const product = {
    name: "Keyboard",
    price: 1200,
    inStock: true
};

product.price = 1000;
product.brand = "Logitech";

console.log("Product:", product);