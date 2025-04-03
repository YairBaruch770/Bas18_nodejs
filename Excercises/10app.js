let number = [];
let evenc = [];
let oddc = [];

for (let i = 0; i < 100; i++) {
    number[i] = Math.floor(Math.random()*101);
    process.stdout.write(number[i] + "|" );   
}

let sum = 0;
for (let j = 0; j < number.length; j++) {
sum += number[j];    
}

console.log(sum);
console.log(sum / number.length);

for(let i = 0; i < number.length; i++){
    if(number[i] % 2 == 0){
        evenc[i] = number[i]; 
    }else{
        oddc[i] = number[i];
    }
}

console.log("Even numbers: " + evenc);
console.log("odd numbers: " + oddc);

for( let i = number.length -1; i > 0; i--){
    process.stdout.write(number[i] + "|" );      
}

let counter = 0

for(let i = 0; i < number.length; i++){
    if(number[i] % 7 == 0){
    counter++    
    }
}
process.stdout.write("Counter: " + counter)