# JavaScript Fundamentals — Day 1

**Topics:** Variables and Data Types  
**Learning resource:** The Net Ninja — Modern JavaScript

## 1. Variables in JavaScript

A variable is a named container used to store data that a program can use.

JavaScript provides three ways to declare variables:

- `let` — used when a value may change.
- `const` — used when a variable should not be reassigned.
- `var` — the older way to declare variables.

### Example

```javascript
let age = 21;
age = 22;

const language = "JavaScript";

var city = "Bengaluru";

console.log(age);
console.log(language);
console.log(city);
```

### Variable naming rules

- Variable names cannot start with a number.
- Names can contain letters, numbers, underscores and dollar signs.
- Names cannot contain hyphens.
- Reserved keywords cannot be used as variable names.
- JavaScript is case-sensitive.

### Difference between `let`, `const`, and `var`

| Feature | `let` | `const` | `var` |
|---|---|---|---|
| Reassignment | Yes | No | Yes |
| Redeclaration in the same scope | No | No | Yes |
| Scope | Block | Block | Function |

## 2. Data Types in JavaScript

A data type describes the kind of value stored in a variable.

JavaScript has seven primitive data types:

1. **String:** Text, such as `"Hello"`.
2. **Number:** Numeric values, such as `100` or `10.5`.
3. **BigInt:** Very large integers, such as `12345678901234567890n`.
4. **Boolean:** `true` or `false`.
5. **Undefined:** A variable declared without an assigned value.
6. **Null:** An intentional absence of a value.
7. **Symbol:** A unique primitive value.

JavaScript also supports non-primitive values, including objects and arrays. Functions are callable objects.

### Example

```javascript
const name = "Dharesh";          // String
const age = 21;                  // Number
const isStudent = true;          // Boolean
let result;                      // Undefined
const selectedUser = null;       // Null
const largeNumber = 123456789n;  // BigInt
const uniqueId = Symbol("id");   // Symbol

const student = { name: "Dharesh" }; // Object
const skills = ["HTML", "CSS"];      // Array
```

## 3. The `typeof` Operator

The `typeof` operator helps identify the type of a value.

```javascript
console.log(typeof "Hello"); // string
console.log(typeof 100);     // number
console.log(typeof true);    // boolean
console.log(typeof undefined); // undefined
console.log(typeof 123n);    // bigint
console.log(typeof Symbol("id")); // symbol
console.log(typeof {});      // object
console.log(typeof []);      // object
console.log(typeof null);    // object
```

**Important:** `typeof null` returns `"object"` because of a historical JavaScript quirk. Arrays also return `"object"`.

To check whether a value is an array, use:

```javascript
console.log(Array.isArray(["HTML", "CSS"])); // true
```

## 4. Today's Practice

1. Declare your name using `const`.
2. Declare your age using `let` and change its value.
3. Create variables for a string, number and Boolean.
4. Create an object containing student details.
5. Create an array containing three programming skills.
6. Use `typeof` to inspect different values.

**Next learning topics:** Operators and Type Conversion.

---

# JavaScript Fundamentals — Day 2

**Topics:** Operators and Type Conversion

## 1. JavaScript Operators

Operators perform operations on values and variables.

### 1.1 Arithmetic operators

Arithmetic operators perform mathematical calculations.

| Operator | Meaning | Example | Result |
|---|---|---|---|
| `+` | Addition | `10 + 5` | `15` |
| `-` | Subtraction | `10 - 5` | `5` |
| `*` | Multiplication | `10 * 5` | `50` |
| `/` | Division | `10 / 5` | `2` |
| `%` | Remainder | `10 % 3` | `1` |
| `**` | Exponentiation | `2 ** 3` | `8` |

### 1.2 Assignment operators

Assignment operators assign or update a variable's value.

```javascript
let score = 10;

score += 5; // score = score + 5
console.log(score); // 15

score -= 3;
console.log(score); // 12

score *= 2;
console.log(score); // 24

score /= 4;
console.log(score); // 6
```

### 1.3 Comparison operators

Comparison operators compare values and return a Boolean: `true` or `false`.

```javascript
console.log(10 > 5);   // true
console.log(10 < 5);   // false
console.log(10 >= 10); // true
console.log(5 <= 3);   // false

console.log(5 === 5);  // true
console.log(5 !== 3);  // true
```

Prefer `===` and `!==` for comparisons because they compare values without automatically converting between different types.

### 1.4 Logical operators

Logical operators combine or reverse conditions.

- `&&` — AND: both conditions must be true.
- `||` — OR: at least one condition must be true.
- `!` — NOT: reverses a Boolean value.

```javascript
const age = 21;
const hasId = true;

console.log(age >= 18 && hasId); // true
console.log(age >= 18 || hasId); // true
console.log(!hasId);             // false
```

### 1.5 Increment and decrement

- `++` increases a number by one.
- `--` decreases a number by one.

```javascript
let count = 5;

count++;
console.log(count); // 6

count--;
console.log(count); // 5
```

## 2. Type Conversion in JavaScript

Type conversion changes a value from one data type to another.

### 2.1 String to Number

Use `Number()` to convert a value into a number.

```javascript
const age = Number("21");

console.log(age);        // 21
console.log(typeof age); // number
```

An invalid numeric string produces `NaN`.

```javascript
console.log(Number("hello")); // NaN
```

### 2.2 Number to String

Use `String()` to convert a number into a string.

```javascript
const price = String(500);

console.log(price);        // "500"
console.log(typeof price); // string
```

### 2.3 Convert to Boolean

Use `Boolean()` to convert a value into `true` or `false`.

```javascript
console.log(Boolean(1));       // true
console.log(Boolean(0));       // false
console.log(Boolean("Hello")); // true
console.log(Boolean(""));      // false
```

### 2.4 Implicit type conversion

JavaScript sometimes converts values automatically.

```javascript
console.log("5" + 2); // "52"
console.log("5" - 2); // 3
console.log("5" * 2); // 10
```

The `+` operator can concatenate strings, while the other arithmetic operators above convert numeric strings into numbers.

### 2.5 Difference between `==` and `===`

- `==` compares values after possible type conversion.
- `===` compares values and types without type conversion.

```javascript
console.log(5 == "5");  // true
console.log(5 === "5"); // false
```

Use `===` by default to avoid unexpected type conversions.

## 3. Truthy and Falsy Values

Falsy values include:

- `false`
- `0` and `-0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

Most other values are truthy, including `"0"`, `"false"`, `[]` and `{}`.

```javascript
console.log(Boolean(0));       // false
console.log(Boolean(""));      // false
console.log(Boolean("Hello")); // true
console.log(Boolean([]));      // true
```

## 4. Practice Exercises

1. Calculate the total price of three products using arithmetic operators.
2. Check whether a person is at least 18 years old using a comparison operator.
3. Check whether a person is at least 18 and has an ID using `&&`.
4. Convert `"250"` into a number.
5. Convert `100` into a string.
6. Predict the output of `"10" + 5` and `"10" - 5`.
7. Explain the difference between `==` and `===`.

**Day 2 goal:** Understand operators and type conversion, write your own examples, run them, and commit your work to GitHub.

**Next topics:** Conditional Statements and Control Flow.

---

# JavaScript Fundamentals — Day 3

**Topics:** Conditional Statements and Control Flow

## 1. The `if` statement

The `if` statement executes code when a condition is true.

```javascript
const age = 20;

if (age >= 18) {
    console.log("You are eligible to vote.");
}
```

## 2. The `if...else` statement

The `else` block executes when the `if` condition is false.

```javascript
const age = 16;

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}
```

## 3. The `else if` statement

Use `else if` when you need to check multiple conditions.

```javascript
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
```

Output: `Grade B`

JavaScript checks conditions from top to bottom and executes the first matching branch.

## 4. Nested `if` statements

An `if` statement can be placed inside another `if` statement.

```javascript
const age = 20;
const hasId = true;

if (age >= 18) {
    if (hasId) {
        console.log("Entry allowed");
    } else {
        console.log("ID required");
    }
} else {
    console.log("You are under 18");
}
```

## 5. The `switch` statement

A `switch` statement compares an expression against several `case` values.

```javascript
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
    default:
        console.log("Invalid day");
}
```

Output: `Wednesday`

- `case` specifies a value to match.
- `break` exits the switch statement.
- `default` runs when no case matches.

## 6. The ternary operator

The ternary operator is a short way to choose between two expressions.

Syntax:

```javascript
condition ? valueIfTrue : valueIfFalse;
```

Example:

```javascript
const age = 20;

const result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

Output: `Adult`

## 7. Practice exercises

1. Check whether a number is positive, negative, or zero.
2. Check whether a person is eligible to vote.
3. Assign a grade based on marks.
4. Print the weekday using a `switch` statement.
5. Check whether a number is even or odd.
6. Use the ternary operator to determine whether a person is an adult or a minor.

**Day 3 goal:** Understand conditional statements and write programs that make decisions.

**Next topic:** Loops — `for`, `while`, and `do...while`.

---

# JavaScript Fundamentals — Day 4

**Topic:** Loops

## 1. What is a loop?

A loop repeats a block of code until a condition is no longer satisfied or the loop is stopped.

## 2. The `for` loop

A `for` loop is useful when you know how many times you want to repeat something.

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Output:

```text
1
2
3
4
5
```

The three parts are:

- Initialization: `let i = 1`
- Condition: `i <= 5`
- Update: `i++`

## 3. The `while` loop

A `while` loop repeats as long as its condition is true.

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

Make sure the condition eventually becomes false to avoid an infinite loop.

## 4. The `do...while` loop

A `do...while` loop executes its body at least once, then checks the condition.

```javascript
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
```

## 5. The `break` statement

`break` immediately exits the loop.

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}
```

Output: `1 2 3 4`

## 6. The `continue` statement

`continue` skips the rest of the current iteration and moves to the next one.

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

Output: `1 2 4 5`

## 7. Practice exercises

1. Print numbers from 1 to 10 using a `for` loop.
2. Print even numbers from 2 to 20.
3. Calculate the sum of numbers from 1 to 100.
4. Print the multiplication table of a number.
5. Use a `while` loop to print numbers from 10 down to 1.
6. Use `break` to stop a loop at 7.
7. Use `continue` to skip the number 5.

**Day 4 goal:** Understand loops and write programs that repeat tasks efficiently.

**Next topic:** Functions and Methods.

# Day 5 — Functions in JavaScript

## What is a Function?

A function is a reusable block of code designed to perform a specific task. We can call it whenever required instead of writing the same code repeatedly.

## 1. Function Declaration

A function declaration defines a function using the `function` keyword.

```javascript
function greet() {
    console.log("Hello, JavaScript!");
}

greet();
```

## 2. Parameters and Arguments

- **Parameters:** Variables listed in the function definition.
- **Arguments:** Actual values passed when calling the function.

```javascript
function greetUser(name) {
    console.log("Hello, " + name);
}

greetUser("Dharesh");
```

## 3. Return Values

The `return` statement sends a value back to the caller.

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));
```

## 4. Function Expressions

A function expression stores a function in a variable.

```javascript
const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 5));
```

## 5. Arrow Functions

Arrow functions use the `=>` syntax.

```javascript
const subtract = (a, b) => {
    return a - b;
};

console.log(subtract(10, 4));
```

For a single expression, an implicit return can be used:

```javascript
const square = number => number * number;

console.log(square(5));
```

## Key Takeaways

- Functions help reuse code.
- Parameters receive input values.
- Arguments are the values passed to functions.
- `return` provides a result to the caller.
- Function expressions store functions in variables.
- Arrow functions provide concise syntax.

# # Day 6 — Arrays and Array Methods

## 1. Arrays

An array stores multiple values in a single variable.

```javascript
const fruits = ["Apple", "Banana", "Mango"];
```

- Array indexing starts at `0`.
- `length` returns the number of elements.
- Elements can be accessed using their indexes.
- Elements in a `const` array can be updated, but the array variable cannot be reassigned.

## 2. Array Methods

- `push()`: adds an element to the end.
- `pop()`: removes the last element.
- `unshift()`: adds an element to the beginning.
- `shift()`: removes the first element.
- `includes()`: checks whether a value exists.
- `indexOf()`: returns the index of a value, or `-1` if it is absent.
- `slice()`: returns a selected portion without modifying the original array.
- `splice()`: adds, removes, or replaces elements in the original array.

## 3. Iterating Through Arrays

Use a `for` loop or `for...of` loop to process array elements.

## Key Takeaways

- Arrays store collections of values.
- Indexes start at zero.
- `length` gives the array size.
- Array methods simplify adding, removing, and searching for elements.
- `slice()` and `splice()` behave differently: `slice()` leaves the original unchanged, while `splice()` modifies it.

# Day 7 — Objects and Object Methods

## 1. Objects

Objects store related data using key-value pairs.

```javascript
const student = {
    name: "Dharesh",
    age: 21,
    branch: "IoT"
};
```

## 2. Accessing Properties

- Dot notation: `student.name`
- Bracket notation: `student["name"]`

## 3. Modifying Objects

- Update: `student.age = 22`
- Add: `student.college = "Presidency University"`
- Delete: `delete student.branch`

## 4. Object Methods

A method is a function defined as a property of an object.

```javascript
const person = {
    name: "Dharesh",

    introduce() {
        return `Hello, I am ${this.name}`;
    }
};

console.log(person.introduce());
```

## 5. The `this` Keyword

In a method called through its object, `this` refers to that object. Arrow functions do not create their own `this`, so regular methods are generally clearer when you need the object's `this`.

## 6. Built-in Object Methods

- `Object.keys(object)`: returns an array of property names.
- `Object.values(object)`: returns an array of property values.
- `Object.entries(object)`: returns an array of key-value pairs.

## Key Takeaways

- Objects organize related information.
- Properties store values.
- Methods perform actions.
- Dot and bracket notation access properties.
- `this` can refer to the object calling a regular method.
- Built-in Object methods help inspect object data.

# Day 8 — Strings and String Methods

## 1. Strings

Strings represent text in JavaScript. They can be written using single quotes, double quotes, or backticks.

```javascript
const name = "Dharesh";
const language = 'JavaScript';
const message = `I am learning ${language}`;
```

## 2. String Length and Indexing

- `length` returns the number of characters.
- String indexing starts at `0`.
- `text[0]` accesses the first character.
- `text[text.length - 1]` accesses the last character.

## 3. Template Literals

Template literals use backticks and `${}` to insert variables and expressions into strings.

```javascript
const name = "Dharesh";
console.log(`Hello ${name}!`);
```

## 4. Common String Methods

- `toUpperCase()`: converts text to uppercase.
- `toLowerCase()`: converts text to lowercase.
- `trim()`: removes whitespace from both ends.
- `includes()`: checks whether a substring exists.
- `indexOf()`: returns the first matching index or `-1`.
- `slice()`: extracts a portion of a string.
- `replace()`: replaces the first matching occurrence.
- `split()`: divides a string into an array.
- `startsWith()`: checks the beginning of a string.
- `endsWith()`: checks the end of a string.

## Key Takeaways

- Strings represent text.
- Indexes start at zero.
- Template literals make dynamic strings easier to read.
- String methods return results without changing the original string.
- `trim()` and `toLowerCase()` are useful when normalizing user input, such as email addresses.