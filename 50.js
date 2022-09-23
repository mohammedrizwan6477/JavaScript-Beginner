// block scope vs function scope
// ============================================================================
// let and const are block scope

// {
//     let firstName = "Rizwan";
//     console.log(firstName);
// }

// {
//     let firstName = "Arsalan";
//     console.log(firstName);
// }

// const firstName = "garima";
// console.log(firstName);
// ==================================================================================
// var is function scope

function myApp(){
    if(true){
        var firstName = "Rizwan";
        // console.log(firstName);
    }

    if(true){
        console.log(firstName);
    }
    // console.log(firstName);
}

myApp()