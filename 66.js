// iterables
// jispe hum for of loop laga sakein
// string , array are iterable

const firstName = "Rizwan";
for(let char of firstName){
    console.log(char);
}

const items = ["item1","item2","item3"];
for(let item of items){
    console.log(item);
}

// array like Object
// jinke pas length property hoti hai
// aur jinko hum index se access kar sakte hai
// example :- String

const lastName = "Rizwan";
console.log(lastName.length);
console.log(lastName[2]);