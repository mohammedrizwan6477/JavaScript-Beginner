// rules for naming variables

// you connot start with number
// example:-
// 1value (invalid)
// value1 (valid)

var value1 = 2;
console.log(value1 * 10);

// you can use only underscore_ or dollar Symbol
// first_name (valid)
// _firstname (valid)

var _firstname = "Mohammed Rizwan";
console.log(_firstname)

//! first$name (valid)
//! $firstname (valid)

var $firstname = "Hello Rizwan";
console.log($firstname);

var first$name = "Hello world";
console.log(first$name);

//! you cannot use spaces

var first_name = "rizwan"; //snake case writing
var firstName = "JavaScript"; //camel case writing

//! first name (invalid)

//! convention
//! start with small letter and use camelcase