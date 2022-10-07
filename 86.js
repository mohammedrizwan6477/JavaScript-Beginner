// 2015 / es6
// class keyword
// class are fake

class CreateUser{
    constructor(firstName,lastName,email,age,address){
        console.log("constructor called");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about(){
        return `${this.firstName} is ${this.lastName} years old`
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "la la la la"
    }
    func(a){
        console.log(a);
    }
}

const user1 = new CreateUser('Rizwan','Mohammed','rizwan@gmail.com',23)
const user2 = new CreateUser('Irfan','Mohammed','irfan@gmail.com',24)
const user3 = new CreateUser('Abc','Mohammed','abc@gmail.com',30)

// console.log(Object.getPrototypeOf(user1));

user1.func("Hello")