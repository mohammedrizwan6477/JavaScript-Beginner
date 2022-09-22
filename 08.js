//! typeof operator

//! data types (primitive data types)
//! string "rizwan"
//! number 2, 4, 5, 6
//! booleans true,false
//! undefined
//! null
//! BigInt
//! Symbol

let age = 22;
let firstName = "Rizwan";

console.log(typeof age); //! number
console.log(typeof firstName); //! String

//! convert number to String
//! 22 ==> "22"
age = age + "";
console.log(typeof age); //! String

age = String(age)
console.log(age);

//! convert string to Number

let myStr = +"34";
console.log(typeof myStr); //! Number

let hello = "18";
hello = Number(hello);
console.log(typeof hello);