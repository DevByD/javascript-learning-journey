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