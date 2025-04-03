let numbers = []

for(let i = 0; i<10; i++){
    let random = Math.floor(Math.random()*10)
    numbers.push(random)
}
console.log(numbers)
//console.log(numbers[3])

for(let j = 0; j < 10; j++){
    if(j > 0 && j < 9){
        console.log(numbers[j])
    }
}