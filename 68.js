//Maps 
// map is an iterable

//strore data in ordered fashion

// store key value pair (like object)
//duplicate keys are not allowed like objects


// different between maps and objects

// objects can only have string or symbol 
// as key

// in maps you can use anything as key
// like array, number, string

// object literal
// key ---> String
// key ---> Symbol
// const person ={
//     firstName:"Rizwan",
//     age:7,
//     1:"one"
// }
// console.log(person.firstName);
// for(let key in person){
//     console.log(typeof key);
// }


// key value pair

const person = new Map();
// console.log(person);
person.set('firstName','Rizwan')
person.set('age',7)
person.set(1,'one')
// console.log(person);
// console.log(person.get(1));
// for(let key of person.keys()){
//     console.log(key);
// }

for (let key of person){
    console.log(Array.isArray(key));
}