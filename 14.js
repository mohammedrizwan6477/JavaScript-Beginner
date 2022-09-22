//! if else condition

let age = 19;

if(age > 18){
    console.log("User can play ddlc"); //! true
}else{
    console.log("User can play mario"); //! false
}

//! even and odd

let num = 12;

if(num%2 === 0){
    console.log('Even');
}else{
    console.log("Odd");
}

//! falsey values

//! false
//! ""
//! null
//! undefined
//! 0

let firstName = '';  //! agar value assigned rahi to ye truethy value hai
                     //! agar value empty rahi to ye falsy value hai
if(firstName){
    console.log(firstName);
}else{
    console.log("firstName is kind empty");
}