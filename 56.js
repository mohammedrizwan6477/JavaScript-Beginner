// important array methods

// forEach
// map
// filter
// reduce


// forEach

// const numebrs = [4,2,5,8];

// function myFunc(number,index){
//     console.log(`index is ${index} number is ${number}`);
// }

// numebrs.forEach(myFunc)


// numebrs.forEach(function(number,index){
//     console.log(number*2);
// })


const users = [
    {firstName:"Rizwan", age:22, work:'SoftwareDevelopment'},
    {firstName:"Arsalan", age:23, work:'Senior SoftwareDevelopment'},
    {firstName:"Hamza", age:29, work:'Accountant'},
    {firstName:"Imran", age:27, work:'Graphic Designer'},
    {firstName:"Azhar", age:25, work:'PhotoShop Designer'},
];

users.forEach(function(user){
    console.log(user.firstName)
})

// arrow Function

// users.forEach((user,index)=>{
//     console.log(user.firstName,index);
// })

// or

// for(let user of users){
//     console.log(user.firstName);
// }