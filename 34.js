//! for in loop in array

const fruits = ['apple','mango','grapes','fruits3'];
const fruits2 = [];
for(let index of fruits){
    fruits2.push(index.toUpperCase())
}

console.log(fruits2);