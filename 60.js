// sort method


// const userNames =['harshit','abcd','mohit','nitish','rizwan'];

// userNames.sort();
// console.log(userNames);



const products = [
    {productId:1,productName:"p1",price:300},
    {productId:2,productName:"p2",price:400},
    {productId:3,productName:"p3",price:500},
    {productId:4,productName:"p4",price:700},
    {productId:5,productName:"p5",price:800},
    {productId:6,productName:"p6",price:200},
    {productId:7,productName:"p7",price:400},
];

// Low to High
const LowToHigh = products.slice(0).sort((a,b)=>{
    return a.price-b.price;
})
console.log(LowToHigh);


//Hight to Low
const highToLow = products.slice(0).sort((a,b)=>{
    return b.price-a.price;
})

console.log(highToLow);