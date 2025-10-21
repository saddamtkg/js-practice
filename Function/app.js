// JavaScript Functions
// add function and exicute

function myFunction() {
  console.log("Hello Function");
}
myFunction();
myFunction();

function myFunctions(fullName, age, dateOfBirth = 1997) {
  console.log(
    "Hello, " + fullName + " I am " + age + " My Date Of Birth " + dateOfBirth
  );
}
myFunctions("Md Saddam", 30, 1995);
myFunctions("Md Ranju", 35);

// function isSubscribed() {
//     console.log("Subscribed");
// }

// document.getElementById('btn').addEventListener('click', isSubscribed)

// self invokes function

(function (message) {
  console.log("I am self invokes Function", message);
})("Hello");

let maths = function (x, y) {
  return x * y;
  console.log("I am learn Js");
};

console.log(maths(3, 4));
console.log(maths(4, 4));

function newFunc() {
  let firstName = "Saddam";
  console.log(firstName);
}

newFunc();

function newFuncs() {
  let firstName = "Saddam";
  console.log(firstName);
}

newFuncs();

let numbers = [4, 5, 6, 7, 8];
let sqNumbers = numbers.map(function (number) {
  return number * number;
});

console.log(sqNumbers);

/*
let add = function(x, y) {
    return x + y;
}

console.log(add(5, 6));
*/

let add = (x, y) => x + y; // arrow function

console.log(add(8, 6));

// nested Function
function greet(firstName) {
  function sayHello() {
    alert("Hello " + firstName);
  }
  return sayHello();
}

greet("Md Saddam");
