// some method

// const numbers = [3,5,8,9];

// // kye ek bhi number esa hai jo even hai
// //true

// const ans = numbers.some((number)=>{
//     return number % 2 === 0;
// })

// console.log(ans);


const userCart =[
    {productId:1,productName:"mobile",price:12000},
    {productId:1,productName:"laptop",price:22000},
    {productId:1,productName:"tv",price:15000},
    {productId:1,productName:"machine",price:40000},
    // {productId:1,productName:"macbook",price:250000},
];

const ans = userCart.some((cartItem)=>{
    return cartItem.price > 100000;
})

console.log(ans);