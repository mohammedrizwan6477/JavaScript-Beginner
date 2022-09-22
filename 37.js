//! difference between dot and bracket notation
const key = "email";
const person = {
    name:'Rizwan',
    age:23,
   "person hobbies":['guitar','sleeping','listening music','reading books']
}
// console.log(person["person hobbies"]);

person[key]="rizwan@gmail.com";
console.log(person);