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