// how to iterate objects
const person = {
    name :"pavan",
    age :22,
    "person hobbies" : ["cricket","kabbadi"]
    // for in loop
}
for(let key in person){
    console.log(key, " : ",person)
}

// Object.keys
// console.log(typeof(Object.keys(person)))
const val = Array.isArray(Object.keys(person))
console.log(val)

for(let key of Object.keys(person)){
    console.log(person[key])
}