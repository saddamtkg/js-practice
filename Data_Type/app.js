// JavaScript Data Types

let firstName = 'Saddam'; // string
//let fullName = 'My Name is "Saddam"' // not use double cotation when use full variable under double cotation
let fullName = 'My Name is \'Saddam\'';

firstName = 'Ranju';
let finalName = `My Name is ${firstName}`
console.log(typeof firstName);
console.log(fullName);
console.log(finalName);


let age = 30;
let age2 = 35;
let calculation = age + age2 + firstName + age + age2;

let numberBig = 9999999999999999n;
let numberBig2 = BigInt(999999999999999999);
console.log(numberBig2);

console.log(numberBig);

let ifAdult = true;

console.log(ifAdult);

console.log(typeof ifAdult);
console.log(age);
console.log(age + age2);
console.log(calculation);



let fruits = ['Apple', 'Lemon', 'Peer', 'Oranges']
// fruits[3] = 'Mango'
fruits[4] = 'Watermelon'


let student = {
    fullName: 'Md Saddam Hossan',
    age: 33,
    dateOfBirth: 1992,
}

console.log(student);
console.log(typeof fruits);