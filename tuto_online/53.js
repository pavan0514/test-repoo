// param destructuring

// object
//react

const person={
    firstName:"pavan",
    gender:"Male",
    age:25
}
function printDetails({firstName,gender,age}){
console.log(firstName)
console.log(gender)
}
printDetails(person)