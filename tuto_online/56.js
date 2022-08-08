// import array methos
// forEach
const numbers = [4, 2, 5, 8]

// function myfunc(number,index){
//     console.log(`index is ${index} number is ${number}`)
// }
// numbers.forEach(myfunc)


// numbers.forEach(function (number, index) {
//     console.log(number * 2, index)
// })

const users = [
    { firstName: "pavan", age: 26 },
    { firstName: "Balaji", age: 52 },
]
users.forEach(function (user) {
    console.log(user.firstName, ":", user.age)
    // console.log(user.age)

})
// using array
users.forEach((user) => {
    console.log(user.age)
})

// for(let user of users){
//     console.log(user.firstName)
// }

