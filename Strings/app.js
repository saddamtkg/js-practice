// File: Strings/app.js

console.log("Hello, World!");
console.log("Welcome to the Strings module.");

const firstName = "Md Saddam Hossan";
const lastName = "Hossan";
const fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);

const greeting = `Hello, ${firstName}! Welcome to the Strings module.`;
console.log(greeting);

document.getElementById("title").innerHTML = `<h1>Hello, ${firstName}!</h1>`;

document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("title").innerHTML = greeting;
});

const fullName2 = new String("Saddam");
const fullName3 = "Saddam";
console.log(fullName2);
console.log(fullName3);
console.log(fullName2 === fullName3); // false
console.log(fullName2 == fullName3);  // true


console.log(greeting.split(" "));
console.log(greeting.includes("Saddam"));
console.log(greeting.startsWith("Hello"));
console.log(greeting.endsWith("module."));
