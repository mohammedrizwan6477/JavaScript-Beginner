// methods
// function inside Object

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName:"Rizwan",
    age:22,
    about:personInfo
}
const person2 = {
    firstName:"Azeem",
    age:21,
    about:personInfo
}
const person3 = {
    firstName:"Aamer",
    age:25,
    about:personInfo
}

person1.about()
person2.about()
person3.about()