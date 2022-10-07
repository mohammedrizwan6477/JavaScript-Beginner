function hello(){
    console.log("Hello World");
}

// javascript function ===> function + Object

// console.log(hello.name);

// you can add your own properties
// hello.myOwnProperty = "Very unique value";
// console.log(hello.myOwnProperty);

// name property ---> tells function name;

// function provides more useFull properties

// function hame deta hai Free spaces jisse hum kahete hai {}

// console.log(hello.prototype) // {}

// only functions provide prototype property

hello.prototype.abc="abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing=function(){
    return "lalalal"
}
console.log(hello.prototype);