// const user1 ={
//     firstName:"Rizwan",
//     lastName:"Mohammed",
//     email:"rizwan@gmail.com",
//     age:2,
//     address:"House Number,Colony,Pincode,State",
//     about:function(){
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18:function(){
//         return this.age >= 18
//     }
// }

// const aboutUser = user1.about(user1);
// console.log(aboutUser);


// 1.) function (that function create object)
// 2.) add key value pair
// 3.) object ko return krega
function createUser(firstName,lastName,email,age,address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} year old`
    };
    user.is18 = function(){
        return this.age >= 18;
    }
    return user;
}

const user2 = createUser('Rizwan','Mohammed','rizwan@gmail.com',23,'Hilal Nagar Tyre Board Nanded')
console.log(user2);
const is18 = user2.is18();
console.log(is18);
const about = user2.about();
console.log(about)