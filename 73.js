const user1 ={
    firstName:"Rizwan",
    age:8,
    about:function(){
        console.log(this.firstName,this.age);
    }
}
const user2 ={
    firstName:"Irfan",
    age:9,
}

user1.about.call(user1)

// apply
// about.apply(user1,["guitar","bach"])
// const func = about.bind(user2,"guitar","bach")
// func()