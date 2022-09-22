//! and or operator

let firstName = "Rizwan";
let age = 22;

//! if(firstName[0] === "R"){
//!     console.log("Your name starts with R");
//! }

//! if(age > 18){
//!     console.log("You are above 18");
//! }

//! &

if(firstName[0] === "R" && age>18){
    console.log("Name starts with R and above 18");
}else{
    console.log("inside else");
}

//! or

let fname = "Mohammed";
let ages = 16;

if(fname[0] === "M" || age>18){
    console.log("inside if");
}else{
    console.log("inside else");
}