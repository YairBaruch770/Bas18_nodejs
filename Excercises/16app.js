function bigNumber(num1,num2){
    if(num1 > num2){
        for(let i = num2; i <= num1; i++){
            console.log(i)
        }
    }else{
        for(let i = num1; i <= num2; i++){
            console.log(i)    
        }
    }



}

bigNumber(8,16)