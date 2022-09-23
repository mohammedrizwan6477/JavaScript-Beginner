// // find methods


// const myArray = ['Hello','cat','dog','lion'];

// function isLength3(string){
//     return string.length === 3;
// }
// const ans = myArray.find(isLength3);
// console.log(ans);


const users = [
    {userId:1,userName:"Rizwan"},
    {userId:2,userName:"Irfan"},
    {userId:3,userName:"Aamer"},
    {userId:4,userName:"Javeed"},
    {userId:5,userName:"Zohan"},
    {userId:6,userName:"Imran"},
    {userId:7,userName:"Sameer"},
    {userId:8,userName:"Zameer"},
];

const myUser = users.find((user)=>{
    return user.userId === 4;
})

console.log(myUser);