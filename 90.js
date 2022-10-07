// getter and setters

class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    setName(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    set fullName(fullName){
       const  [firstName,lastName]=fullName.split(" ")
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("Rizwan","Mohammed",24);

// get

// console.log(person1);
// console.log(person1.fullName())
// console.log(person1.fullName)

// set

// person1.setName("Irfan","shaikh")
// console.log(person1);
// console.log(person1.firstName);
// console.log(person1.lastName);

person1.fullName = "abcde xyz";
console.log(person1);
