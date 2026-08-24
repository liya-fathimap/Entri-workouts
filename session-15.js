// ==================================================
// 1. GLOBAL SCOPE
// ==================================================

// Variables declared outside functions or blocks
// belong to the global scope.

const siteName = "ShopEasy";
let totalUsers = 0;

function showSite() {
    // Global variables can be accessed inside functions.
    console.log(siteName);
}

showSite();


// ==================================================
// 2. FUNCTION SCOPE
// ==================================================

// Variables declared inside a function can only be
// accessed within that function.

function calculateTotal(price, quantity) {
    const subtotal = price * quantity;
    const tax = subtotal * 0.18;

    return subtotal + tax;
}

console.log(calculateTotal(100, 3)); // 354

// subtotal is not accessible outside calculateTotal().
// console.log(subtotal); // ReferenceError


// ==================================================
// 3. BLOCK SCOPE
// ==================================================

// let and const are block-scoped.

if (true) {
    let blockVar = "block-scoped";
    console.log(blockVar); // block-scoped
}

// blockVar is not accessible outside the block.
// console.log(blockVar); // ReferenceError


// var is not block-scoped and can be accessed outside
// the block where it was declared.

if (true) {
    var leakyVar = "I leak out";
}

console.log(leakyVar); // I leak out


// ==================================================
// 4. LEXICAL SCOPE
// ==================================================

// An inner function can access variables from its
// own scope as well as its outer scopes.

const greeting = "Hello"; // Global scope

function outer() {
    const name = "Priya"; // Outer function scope

    function inner() {
        const punctuation = "!"; // Inner function scope

        // inner() can access:
        // punctuation, name, and greeting.
        console.log(greeting + ", " + name + punctuation);
    }

    inner();
}

outer(); // Hello, Priya!


// ==================================================
// 5. SCOPE CHAIN
// ==================================================

// JavaScript searches for variables from the current
// scope and then moves outward through parent scopes.

const a = "global";

function outerScope() {
    const b = "outer";

    function middle() {
        const c = "middle";

        function inner() {
            // Scope chain:
            // inner → middle → outerScope → global

            console.log(a); // Found in global scope
            console.log(b); // Found in outerScope()
            console.log(c); // Found in middle()
        }

        inner();
    }

    middle();
}

outerScope();


// ==================================================
// 6. CLOSURE
// ==================================================

// A closure allows an inner function to remember
// and access variables from its outer function.

function makeCounter() {
    let count = 0;

    function increment() {
        count++;
        console.log(count);
    }

    return increment;
}

const counter = makeCounter();

counter(); // 1
counter(); // 2
counter(); // 3


// ==================================================
// 7. HOISTING
// ==================================================

// FUNCTION HOISTING
// Function declarations can be called before
// their declaration appears in the code.

console.log(greet("Alice")); // Hello, Alice!

function greet(name) {
    return `Hello, ${name}!`;
}


// VAR HOISTING
// var is hoisted and initialized with undefined.

console.log(score); // undefined

var score = 100;

console.log(score); // 100


// JavaScript behaves approximately like this:
//
// var score;
// console.log(score); // undefined
// score = 100;
// console.log(score); // 100


// LET HOISTING
// let is hoisted but cannot be accessed before
// it is initialized.

// console.log(username);
// ReferenceError: Cannot access 'username' before initialization

let username = "Alice";


// CONST HOISTING
// const is also hoisted but cannot be accessed
// before it is initialized.

// console.log(PI); // ReferenceError

const PI = 3.14;