let numbers = [1,2,3,4,5,6,7,8,9,10]

//numbers.shift()

for(let i = 0; i < numbers.length; i++){
     if(i % 2 != 0 ){
        console.log("even: " + numbers[i])
     }else{
        console.log("not even: " + numbers[i])
     }
 
     if(numbers[i] % 2 == 0){
        console.log("even number: " + numbers[i])
     }
}