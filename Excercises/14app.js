function bigNum(num1,num2,num3){
    if(num1 > num2 && num1 > num3){
        console.log(num1)
    }
    if(num2 > num1 && num2 > num3){
        console.log(num2)
    }
    if(num3 > num1 && num3 > num2){
        console.log(num3)
    } 

}

for(let i = 0; i < 10; i++){
    num1 = Math.floor(Math.random()*10)
    num2 = Math.floor(Math.random()*10)
    num3 = Math.floor(Math.random()*10)
    bigNum(num1,num2,num3)
}


