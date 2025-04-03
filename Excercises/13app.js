function Average(num1, num2, num3){
let sum = (num1 + num2 + num3) / 3
    console.log(sum)
}

for(let i = 0; i < 10; i++){
    num1 = Math.floor(Math.random()*10)
    num2 = Math.floor(Math.random()*10)
    num3 = Math.floor(Math.random()*10)
    Average(num1,num2,num3)
}
