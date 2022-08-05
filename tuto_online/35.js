// array destructuring

const myArray = ["v1","v2","v3","v4","v5"]
let[myvar1,myvar2,...myNewArray]=myArray
// let myNewArray = myArray.slice(2)
console.log("value of myvar1",myvar1)
console.log("value of myvar2",myvar2)
console.log("newArray",myNewArray)