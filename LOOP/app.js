// JavaScript Loop Example
// for (let i = 1; i <= 10; i++) {
//     console.log("Iteration number: " + i);
// }
// End of Loop Example
// This code will print the numbers 1 to 10 in the console, each prefixed with "Iteration number: ".
// You can run this code in any JavaScript environment, such as a web browser console or Node.js.
// To run in Node.js, save this code in a file named app.js and execute `node app.js` in your terminal.

// Thank you for using this example!
// Enjoy coding!

//video example

let car = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// console.log(car[0]);
// console.log(car[1]);

// for (let i = 0; i < 5; i++) {
//     console.log(car[i]);
// }

// for (let i = 0; i < car.length; i++) {
//     console.log(car[i]);
// }

//for in loop

let person = {
    Name: "John",
    age: 25,
    country: "Bangladesh",
    hobby: "coding",
    education: "BSS",
};
for (let i in person) {
    let capLetter = i.charAt(0).toUpperCase() + i.slice(1);
    // console.log(capLetter + ": " + person[i]);
    //console.log(i + ": " + person[i]);
    // console.log(person[i]);
}

//for each Method use full feature in array
// car.forEach(function (i) {
//     console.log(i);
// });

// for of loop
// for (let i of car) {
//     console.log(i);
// }

// while loop
let j = 0;
while (j < car.length) {
    console.log(car[j]);
    j++;
}
// do while loop
let k = 0;
do {
    console.log(car[k]);
    k++;
} while (k < car.length);
// end of loop examples





let cars = [
    { name: "BMW", price: 5500000, available: true },
    { name: "Volvo", price: 4800000, available: false },
    { name: "Audi", price: 6200000, available: true },
    { name: "Toyota", price: 3500000, available: true },
    { name: "Ford", price: 4000000, available: true},
];

let carContainer = document.getElementById("carList");

cars.forEach((car) => {
    if (car.available) {
        let item = document.createElement("p");
        item.innerText = `${car.name} - ৳${car.price}`;
        carContainer.appendChild(item);
    }
});
