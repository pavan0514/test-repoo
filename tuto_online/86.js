class createUser{
    constructor(firstName, lastName, email, age, address){
        console.log("constructor called")
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age
    this.address = address
}
about(){
    return `${this.firstName} is ${this.age} years old`
}
is18(){
    return this.age >= 18
}
}





const user1 = new createUser("pavan", "bembde", "pavan@gmail.com", 19, "myaddress")
const user2 = new createUser("pava", "bembde", "pavan@gmail.com", 18, "myaddress")
const user3 = new createUser("pavana", "bembde", "pavan@gmail.com", 1, "myaddress")

console.log(user1.firstName)
console.log(Object.getPrototypeOf(user1))