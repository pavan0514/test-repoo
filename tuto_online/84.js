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

for(let key in user1){
    // console.log(key)
    if(user1.hasOwnProperty(key)){
        console.log(key)
    }
}