// map method

const numbers = [3,4,6,1,8];

// const square = function(numebr){
//     return number*number
// }

// const squareNumber = numbers.map((number,index)=>{
//     return `${index} is ${number*number}`;
// })
// console.log(squareNumber);


const users = [
    {firstName:"Rizwan", age:22, work:'SoftwareDevelopment'},
    {firstName:"Arsalan", age:23, work:'Senior SoftwareDevelopment'},
    {firstName:"Hamza", age:29, work:'Accountant'},
    {firstName:"Imran", age:27, work:'Graphic Designer'},
    {firstName:"Azhar", age:25, work:'PhotoShop Designer'},
];


const userName = users.map((user)=>{
    return user;
})
console.log(userName);