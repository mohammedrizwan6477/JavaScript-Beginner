// clone using Object.assig

// memory

const obj = {
    key1: "value1",
    key2: "value2"
}

// const obj2 = obj
// console.log(obj2);
// obj.key3 = "value3"
// console.log(obj);

// const obj2 = {...obj}
const obj2 = Object.assign({},obj)
console.log(obj2);