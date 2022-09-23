// funtions inside funtion

function app(){
    const myFunc=()=>{
        console.log("hello from myFunc");
    }

    const addTwo=(num1,num2)=>{
        return num1 + num2;
    }

    const mull = (num1, num2)=>num1 * num2;

    console.log("inside app");
    myFunc()
    console.log(addTwo(5,10));
    console.log(mull(4,5));
}

app()