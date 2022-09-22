//! how to iterate object

const person = {
    name:'Rizwan',
    age:23,
   "person hobbies":['guitar','sleeping','listening music','reading books']
}

//* for in loop

// for(let key in person){
//     console.log(person[key]);
// }

// for(let key in person){
//     console.log(`${key} : ${person[key]}`);
// }

//* objects.keys

// console.log(typeof (object.keys(person)));
// const val = Array.isArray((object.keys(person)))

// for(let key of object.keys(person)){
//     console.log(person[key]);
// }