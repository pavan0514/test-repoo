// difference between dot and bracket notation
const key = "email"
const person = {
    name:"pavan",
    age:22,
    "person hobbies" :["cricket","kabbadi","chess","swiming"]
}
// console.log(person["person hobbies"])
person[key] = "pavan@doodle.com"
console.log(person)