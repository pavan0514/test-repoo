// map method

// const numbers =[ 3,4,5,6,2]

//  const square=function(number){
//     return number*number
//  }
//  const squareNumbers=numbers.map(square)
//  console.log(squareNumbers)


const users = [
   { firstName: "pavan", age: 26 },
   { firstName: "Balaji", age: 52 },
]
const usernames = users.map((user) => {
   return user.firstName
})
console.log(usernames)
