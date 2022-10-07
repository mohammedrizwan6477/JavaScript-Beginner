const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old`
    },
    is18: function(){
        return this.age >= 18;
    }
}

function createUser(firstName,lastName,email,age,address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user
    // user.about = function(){
    //     return `${this.firstName} is ${this.age} year old`
    // };
    // user.is18 = function(){
    //     return this.age >= 18;
    // }
    // return user;
}

const user2 = createUser('Rizwan','Mohammed','rizwan@gmail.com',23,'Hilal Nagar Tyre Board Nanded')
const user3 = createUser('Arasalan','Mohammed','arsalan@gmail.com',17,'Khudwai Nagar Tyre Board Nanded')
const user4 = createUser('Mujeeb','Khan','imran@gmail.com',33,'Pilli Building Chowk Board Nanded')

console.log(user2.about())
console.log(user3.about())
console.log(user4.about())