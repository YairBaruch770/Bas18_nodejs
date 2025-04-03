let grades = []
for(let i = 0; i<10; i++){
let number = Math.floor(Math.random()*100)
grades.push(number) 
}

for(let j = 0; j<10; j++){
    if(grades[j] > 55){
        console.log("The grade above 55: " + grades[j])
    }else {
        console.log("The grade below 55: " + grades[j])   
    }
}