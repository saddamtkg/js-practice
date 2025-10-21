// JavaScript Variables
/*
* JavaScript variable names are case-sensitive
! variable names cannot contain spaces.
* variables cannot be the same ad reseved keywords such as `if` or `const`.
* By convention, JavaScript vairable names are written in camelcase.
* Variables should be given descriptive names that indicate their content and usage (e.g. `sellingPrice` and ` costPrice` rather than `x` and `y`)
* Can't add number first. (`1firstName` not use like this)
* _, $ is acceptable but `-` not accaptable.
*/


/*
* Var Variable
* it can re-declare
* it can re-assaign
* Global Scooped.
* var is hosted.
*/

var a = 10;
var a =11;  // re-declare kora jai
a = 'Bangladesh'; // re-assaign kora jai


console.log(a);


{
    var blocked = '30';
    console.log(blocked); // in block access variables
    console.log(a); // out of block access variables
}

console.log(country); // var is hosted
var country = 'Bangladesh'; // when use like this it show undefined. undefined is when use variable is not assaign a value.


/*
* let Variable
* it can't re-declare
* it can re-assaign
* Block Scooped.
* let is not hosted.
*/


let b = 10;  
//let b = 11;  //can't re-declare
b = 15; //can re-assaign


console.log(b);
{
    let b = 25;
    console.log(b); // it is Block scooped not use out of block
}


/*
* const Variable
* it can't re-declare
* it can re-assaign
* Block Scooped.
* const is not hosted.
*/

const c = 10;
// ! const c = 15; can't re-declare
// ! c = 50; can't re-assaign

console.log(c);

{
    const d = 100;
    console.log(d);
    console.log(c);
}
// console.log(d); not access out of blocked