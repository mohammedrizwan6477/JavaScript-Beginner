// Sets (it is iterable)
// store data
// sets also have its own methods
// No index-based access
// Order is not guaranteed
// unique items only (no duplicates allowed)

const items = ['itme1','item2','item3']
const numbers = new Set([1,2,3]);
numbers.add(4)
numbers.add(5)
numbers.add(items)
numbers.add(['hello1','hello2'])
numbers.add(['hello1','hello2'])

if(numbers.has(5)){
    console.error("5 is present");
}else{
    console.error("5 is not present");
}

console.log(numbers);


const myArray = [1,2,4,4,5,6,5,6];
const uniqueElement = new Set(myArray);
console.log(uniqueElement);

let length = 0;
for(let element of uniqueElement){
    length++
}

console.log(length);