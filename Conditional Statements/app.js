// JavaScript Conditional Statements

// Example 1: if statement
let age = 20;
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// Example 2: if...else if...else statement
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}
// Example 3: switch statement
let fruit = "Apple";
switch (fruit) {
    case "Banana":
        console.log("Yellow fruit");
        break;
    case "Apple":
        console.log("Red fruit");
        break;
    default:
        console.log("Unknown fruit");
}
// Example 4: Ternary operator
let isMember = true;
let discount = isMember ? 0.1 : 0;
console.log("Discount:", discount);
// Example 5: Nested if statement
let userRole = "admin";
if (userRole === "admin") {
    console.log("Access granted");
} else {
    console.log("Access denied");
}
// Example 6: Logical operators in conditions
let temperature = 25;
if (temperature > 30) {
    console.log("It's a hot day");
} else if (temperature > 20) {
    console.log("It's a pleasant day");
} else {
    console.log("It's a cold day");
}
// Example 7: Checking multiple conditions
let day = "Saturday";
if (day === "Saturday" || day === "Sunday") {
    console.log("It's a weekend");
} else {
    console.log("It's a weekday");
}
// Example 8: Using switch with fall-through
let dayOfWeek = 3;
switch (dayOfWeek) {
    case 1:
    case 2:
    case 3:
        console.log("It's a weekday");
        break;
    case 4:
    case 5:
        console.log("It's almost the weekend");
        break;
    case 6:
    case 7:
        console.log("It's the weekend");
        break;
    default:
        console.log("Invalid day");
}
// Example 9: Complex condition with logical AND
let hoursWorked = 45;
if (hoursWorked > 40 && hoursWorked <= 60) {
    console.log("Eligible for overtime pay");
} else {
    console.log("Not eligible for overtime pay");
}
// Example 10: Using if statement with arrays
let colors = ["red", "green", "blue"];
if (colors.includes("green")) {
    console.log("Green is in the array");
} else {
    console.log("Green is not in the array");
}
// Example 11: Using switch with strings
let command = "start";
switch (command) {
    case "start":
        console.log("Command is start");
        break;
    case "stop":
        console.log("Command is stop");
        break;
    default:
        console.log("Unknown command");
}
// Example 12: Ternary operator with function
function getStatus(isOnline) {
    return isOnline ? "User is online" : "User is offline";
}
console.log(getStatus(true));
console.log(getStatus(false));
// Example 13: Nested switch statement
let vehicleType = "car";
let vehicleColor = "red";
switch (vehicleType) {
    case "car":
        switch (vehicleColor) {
            case "red":
                console.log("Red car");
                break;
            case "blue":
                console.log("Blue car");
                break;
            default:
                console.log("Unknown car color");
        }
        break;
    case "truck":
        console.log("It's a truck");
        break;
    default:
        console.log("Unknown vehicle type");
}
// Example 14: Using if statement with objects
let person = { name: "Alice", age: 30 };
if (person.age >= 18) {
    console.log(person.name + " is an adult");
} else {
    console.log(person.name + " is a minor");
}
// Example 15: Combining multiple conditions
let dayOfMonth = 15;
if (dayOfMonth >= 1 && dayOfMonth <= 10) {
    console.log("Beginning of the month");
} else if (dayOfMonth >= 11 && dayOfMonth <= 20) {
    console.log("Middle of the month");
} else {
    console.log("End of the month");
}
// Example 16: Using switch with numbers
let month = 4;
switch (month) {
    case 1: console.log("January"); break;
    case 2: console.log("February"); break;
    case 3: console.log("March"); break;
    case 4: console.log("April"); break;
    case 5: console.log("May"); break;
    case 6: console.log("June"); break;
    case 7: console.log("July"); break;
    case 8: console.log("August"); break;
    case 9: console.log("September"); break;
    case 10: console.log("October"); break;
    case 11: console.log("November"); break;
    case 12: console.log("December"); break;
    default: console.log("Invalid month");
}
// Example 17: Ternary operator with arithmetic
let a = 10;
let b = 20;
let max = (a > b) ? a : b;
console.log("The maximum value is " + max);
// Example 18: if statement with function
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(num + " is even");
    } else {
        console.log(num + " is odd");
    }
}
checkEvenOdd(7);
checkEvenOdd(12);
// Example 19: Using switch with boolean values
let isRaining = true
switch (isRaining) {
    case true:
        console.log("It's raining");
        break;
    case false:
        console.log("It's not raining");
        break;
    default:
        console.log("Unknown weather condition");
}
// Example 20: Complex nested conditions
let time = 14; // 2 PM
if (time >= 0 && time < 12) {
    console.log("Good morning");
} else if (time >= 12 && time < 18) {
    console.log("Good afternoon");
} else if (time >= 18 && time < 24) {
    console.log("Good evening");
} else {
    console.log("Invalid time");
}
// End of examples
