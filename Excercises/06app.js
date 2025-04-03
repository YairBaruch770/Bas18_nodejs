let total = 0
let fruits = ["apple", "banana", "grapes", "orange", "avocado"]
console.log(fruits)
for (let i = 0; i < fruits.length; i++) {
    let length = fruits[i]
    total += length.length
    console.log(length.length)
}

console.log(total)