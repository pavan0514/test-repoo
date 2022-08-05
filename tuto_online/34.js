// for in loop in array

const fruits = ["apple", "banana", "grapes"]
fruits2 = []
for (let index in fruits) {
    // console.log(fruit)
    fruits2.push(fruits[index].toUpperCase())
}
console.log(fruits2)