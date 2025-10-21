// JavaScript Operator

/*
* Arithmemtic Operator
*/

let a = 1000; 
let b = 20;
let c = a % b; // % modulas oparetor vagses dekhar jonno

console.log(c);

/*
console.log(c);
let userInput = prompt('Enter a Number')
let number = parseInt(userInput);
if(number % 2 === 0) {
    console.log(`${number} is even number`);
} else {
    console.log(`${number} is odd number`);
}
*/

let x = 10;
x= x + 1;
x++

let y = 20;
y = y- 1;
y--
console.log(y);


/*
* Comparison Operator
*/

let p = '5';
let q = 10;

console.log(p==q); // equal value
console.log(p===q); // equal value and equal type 
console.log(p !== q); // not equal value or not
console.log(p > q);  // Greater than
console.log(p < q); // less than
console.log(p >= q); // less than equal to
console.log(p <= q); // greater than equal to


/*
* Logical Operator
*/
// && use this only ans true when use two side true (and)
// || use this only ans true when use one side true (or)
// !(p<q) NOT Operator


/*
* Assignment Operator
*/
let j = 10;
let k = 20;
j = j + k;
j+= k;
j = j* k;
j *= k;
j = j / k;
j /= k;
j %= k;
j **= k;
console.log(j);


/*
* Conditional (Ternary) Operator
*/

let t = a < b ? "True" : "false";
console.log(t);