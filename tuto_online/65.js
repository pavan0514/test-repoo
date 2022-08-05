// console.log("Helo splice")
// splice method
// start.delete,insert

const myArray = ["item1","item2","item3"]

// // delete
// const deletedItem =myArray.splice(1,1)
// console.log(myArray)
// console.log("deletedItem",deletedItem)

// insert
// myArray.splice(1,0,"pavan")
// console.log(myArray)


// insert and delete
const deletedItem = myArray.splice(1,2,"pava","bembde")
console.log("deletedItem",deletedItem)
console.log(myArray)