// filter method

const numbers = [1,3,2,6,4,8];

// const isEven = function(number){           // 2 se divide hone wale number even 
//     return number % 2 === 0;
// }

// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);


// ===============================================================================


const isOdd = function(number){           // 2 se divide nahi hone wale number Odd 
    return number % 2 !== 0;
}

const evenNumbers = numbers.filter(isOdd);
console.log(evenNumbers);