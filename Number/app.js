// JavaScript Numbers


let integerNum = 42; // An integer
let floatNum = 3.14; // A floating-point number
let negativeNum = -7; // A negative number
let largeNum = 1.2e6; // Scientific notation for 1,200,000
console.log("Integer:", integerNum);
console.log("Float:", floatNum);
console.log("Negative Number:", negativeNum);
console.log("Large Number (Scientific Notation):", largeNum);

// Basic Arithmetic Operations

let sum = integerNum + floatNum; // Addition
let difference = integerNum - floatNum; // Subtraction
let product = integerNum * floatNum; // Multiplication
let quotient = integerNum / floatNum; // Division
let remainder = integerNum % 5; // Modulus
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);

// Number Methods

let fixedNum = floatNum.toFixed(2); // Rounds to 2 decimal places
let preciseNum = floatNum.toPrecision(3); // Formats to 3 significant digits
let parsedInt = parseInt("123abc"); // Parses integer from string
let parsedFloat = parseFloat("3.14xyz"); // Parses float from string
console.log("Fixed Number:", fixedNum);
console.log("Precise Number:", preciseNum);
console.log("Parsed Integer:", parsedInt);
console.log("Parsed Float:", parsedFloat);

// Special Number Values

let notANumber = NaN; // Not a Number
let infinityNum = Infinity; // Positive Infinity
let negativeInfinityNum = -Infinity; // Negative Infinity
console.log("NaN:", notANumber);
console.log("Infinity:", infinityNum);
console.log("Negative Infinity:", negativeInfinityNum);

// Checking for NaN

let isNanCheck = isNaN(notANumber);
console.log("Is NaN:", isNanCheck);

// Checking for Finite Numbers

let isFiniteCheck = isFinite(integerNum);
console.log("Is Finite:", isFiniteCheck);

// Converting Numbers to Strings

let numToString = integerNum.toString();
console.log("Number to String:", numToString);

// Exponential Notation

let expNotation = floatNum.toExponential(2);
console.log("Exponential Notation:", expNotation);

// Hexadecimal and Octal Numbers

let hexNum = 0xFF; // Hexadecimal for 255
let octNum = 0o77; // Octal for 63
console.log("Hexadecimal Number:", hexNum);
console.log("Octal Number:", octNum);

// Binary Number

let binNum = 0b1010; // Binary for 10
console.log("Binary Number:", binNum);

// Rounding Numbers

let roundedUp = Math.ceil(floatNum);
let roundedDown = Math.floor(floatNum);
let rounded = Math.round(floatNum);
console.log("Rounded Up:", roundedUp);
console.log("Rounded Down:", roundedDown);
console.log("Rounded:", rounded);

// Maximum and Minimum Safe Integers

let maxSafeInt = Number.MAX_SAFE_INTEGER;
let minSafeInt = Number.MIN_SAFE_INTEGER;
console.log("Max Safe Integer:", maxSafeInt);
console.log("Min Safe Integer:", minSafeInt);

// Checking for Safe Integers

let isSafeInt = Number.isSafeInteger(integerNum);
console.log("Is Safe Integer:", isSafeInt);

// Mathematical Constants

console.log("PI:", Math.PI);
console.log("Euler's Number (e):", Math.E);
console.log("Square Root of 2:", Math.SQRT2);
console.log("Square Root of 1/2:", Math.SQRT1_2);
console.log("Natural Log of 2:", Math.LN2);
console.log("Natural Log of 10:", Math.LN10);
console.log("Log Base 2 of e:", Math.LOG2E);
console.log("Log Base 10 of e:", Math.LOG10E);

// Random Number Generation

let randomNum = Math.random();
console.log("Random Number:", randomNum);

// Generating a Random Integer between min and max

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomInt = getRandomInt(1, 100);
console.log("Random Integer (1-100):", randomInt);

// Absolute Value

let absoluteValue = Math.abs(-42);
console.log("Absolute Value of -42:", absoluteValue);

// Power and Square Root

let powerValue = Math.pow(2, 3);
let squareRootValue = Math.sqrt(16);
console.log("2 to the power of 3:", powerValue);
console.log("Square Root of 16:", squareRootValue);

// Trigonometric Functions

let sinValue = Math.sin(Math.PI / 2);
let cosValue = Math.cos(0);
let tanValue = Math.tan(Math.PI / 4);
console.log("Sine of 90 degrees:", sinValue);
console.log("Cosine of 0 degrees:", cosValue);
console.log("Tangent of 45 degrees:", tanValue);

// Logarithmic Functions

let logValue = Math.log(10);
let log10Value = Math.log10(100);
let log2Value = Math.log2(8);
console.log("Natural Log of 10:", logValue);
console.log("Log Base 10 of 100:", log10Value);
console.log("Log Base 2 of 8:", log2Value);

// Hyperbolic Functions

let sinhValue = Math.sinh(1);
let coshValue = Math.cosh(1);
let tanhValue = Math.tanh(1);
console.log("Hyperbolic Sine of 1:", sinhValue);
console.log("Hyperbolic Cosine of 1:", coshValue);
console.log("Hyperbolic Tangent of 1:", tanhValue);

// Rounding to Nearest Integer

let roundUp = Math.ceil(4.7);
let roundDown = Math.floor(4.7);
let roundNearest = Math.round(4.7);
console.log("Rounded Up:", roundUp);
console.log("Rounded Down:", roundDown);
console.log("Rounded Nearest:", roundNearest);

// Finding Maximum and Minimum Values

let maxValue = Math.max(1, 2, 3, 4, 5);
let minValue = Math.min(1, 2, 3, 4, 5);
console.log("Maximum Value:", maxValue);
console.log("Minimum Value:", minValue);

// Clamping a Number between a Range

function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
let clampedValue = clamp(10, 1, 5);
console.log("Clamped Value (10, 1, 5):", clampedValue); // Output: 5

// End of JavaScript Numbers Example



