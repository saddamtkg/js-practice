// javaScript scop

var a = 10; // Global scope

function outerFunction() {
    var b = 20; // Local scope to outerFunction
    console.log("Outer Function - a:", a); // Accessing global variable
    console.log("Outer Function - b:", b); // Accessing local variable
}
outerFunction();

console.log("Global Scope - a:", a); // Accessing global variable
// console.log("Global Scope - b:", b); // This will cause an error as b is not defined in global scope

function innerFunction() {
    var c = 30; // Local scope to innerFunction
    console.log("Inner Function - a:", a); // Accessing global variable
    // console.log("Inner Function - b:", b); // This will cause an error as b is not defined in this scope
    console.log("Inner Function - c:", c); // Accessing local variable
}
innerFunction();
