//! undefined

let firstName;
console.log(typeof firstName);
firstName = "Rizwan";
console.log(typeof firstName,firstName);

//! null

let myVariable = null;
console.log(myVariable);
myVariable = "rizwan";
console.log(myVariable,typeof myVariable);

console.log(typeof null);
//! bug  //error

//! BigInt
let myNumber = BigInt(123);
let sameMyNumber = 123n;
//! console.log(myNumber);
console.log(myNumber+ sameMyNumber);
