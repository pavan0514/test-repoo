// MAP
// const person = new Map();
// person.set("firstName", 'harshit')
// person.set("age", 7)
// person.set(1, "one")
// // console.log(person)
// for (let [key, value] of person) {
//     console.log(key, value)
// }

// eg

const person1 = {
    id: 1,
    firstName: "Pavan"
}

const person2 = {
    id: 2,
    firstName: "harsh"
}
const extraInfo = new Map()
extraInfo.set(person1, { age: 8, gender: "male" })
extraInfo.set(person2, { age: 8, gender: "female" })

console.log(extraInfo)
console.log(extraInfo.get (person1))

console.log(extraInfo.get (person2))

console.log(extraInfo.get (person1).gender)
