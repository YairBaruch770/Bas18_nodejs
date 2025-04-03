function sumNumber(num1,num2){
    let sum = 0
    
    if(num1 > num2){
        for(let i = num2; i < num1; i++){
            sum += 1 
        }
        console.log(sum)
    }else{
        for(let i = num1; i < num2; i++){
            sum += 1 
        }
        console.log(sum)
    }



}

sumNumber(3,5)