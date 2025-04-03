
console.log("Hello world!")

for (let i = 0; i < 10; i++) {
    console.log(i)
}

let cars = ["bmw", "subaru", "mercedes"]
cars.push("masda")
console.log(cars)

if (cars.includes("bmw")) {
    console.log("yes!")
} else {
    console.log("no!")

}

let car = cars.pop(1)
console.log("car is: " + car)
console.log(cars)
console.log(cars[cars.length - 1])



let num = Math.random()
num = num * 100
num = Math.floor(num)
console.log(num)



let number = math.floor(Math.random()*100) 
console.log(number)