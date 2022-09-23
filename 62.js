// every method

// const numbers = [2,4,6,8,10];

// const isEven=(number)=>{
//     return number % 2 === 0;
// }

// const ans = numbers.every(isEven)

// // callback function ------>  true / false  (boolean)

// // every method --------> true / false (boolean)

// console.log(ans);



const userCart =[
    {productId:1,productName:"mobile",price:12000},
    {productId:1,productName:"laptop",price:22000},
    {productId:1,productName:"tv",price:15000},
    {productId:1,productName:"machine",price:40000},
]

const ans = userCart.every((cartItem)=>{
    return cartItem.price < 30000
})

console.log(ans);