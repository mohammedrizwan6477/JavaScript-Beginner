//! break keyword

//* for(let i = 1; i<=10; i++){
//*     if(i===5){
//*         break;
//*     }
//*     console.log(i);
//* }

//! continue keyword

for(let i=1;i<=10;i++){
    if(i===4){   //only 4 number is break after all every number is print
        continue;
    }
    console.log(i);
}