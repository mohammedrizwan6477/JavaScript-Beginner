// optional chaining

const user = {
    firstName : "Rizwan",
    address : {houserNumber:'1234'}
}

console.log(user.firstName);
console.log(user?.address.houserNumber);