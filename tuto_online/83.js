// new keyword
// function createUser(firstName, age) {
//     this.firstName = firstName
//     this.age = age
// }
// createUser.prototype.about = function(){
//     console.log(this.firstName,this.age)
// }
// const user1 = new createUser("harshit",2)
// console.log(user1)

// new keyword
// 1) empty object this = {}
// 2.) return this
// user1.about

// --------------------------------------------------
// new keyword
function createUser(firstName, lastName, email, age, address) {
    // const user = Object.create(createUser.prototype)
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age
    this.address = address

    // return user
}
createUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old`
};
createUser.prototype.is18 = function () {
    return this.age >= 18
}
createUser.prototype.sing = function () {
    return "la la la la la la"
}




const user1 = new createUser("pavan", "bembde", "pavan@gmail.com", 19, "myaddress")
const user2 = new createUser("pava", "bembde", "pavan@gmail.com", 18, "myaddress")
const user3 = new createUser("pavana", "bembde", "pavan@gmail.com", 1, "myaddress")

console.log(user1)
console.log(user1.about())
console.log(user1.sing())