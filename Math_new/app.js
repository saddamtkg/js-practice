// // javaScript Math

// let num = 30.00000000000001;
// let num2= 2;


// //If need Roud Number
// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));


// // Squre Value

// console.log(Math.pow(5, 3));


// // Root Value

// console.log(Math.sqrt(64));

// console.log(Math.abs(-5)); //when need positive value


// console.log(Math.min(1,2,3,4,5,6,7,8,9,0));
// console.log(Math.max(1,2,3,4,5,6,7,8,9,0));

// console.log(Math.PI);

// console.log(Math.cos(0*Math.PI / 180));


// console.log(Math.random().toFixed(2)*10 +1);
// console.log(Math.floor(Math.random().toFixed(2)*10 +1));


// let upperValue = 6;
// let lowerValue = 1;

// let resultValue = Math.ceil(Math.random() * upperValue);

// console.log(resultValue);


document.getElementById("btn").addEventListener(
    'click',
    function () {
    let randomNumber = Math.floor(Math.random() * 6) +1;
    let imageSource = 'img/' + randomNumber + '.png';
    document.getElementById("ludo").src = imageSource;
},
)
