const userMethods={
    about : function(){
        return `${this.firstName} is ${this.age} years old`
    },
    is18 : function(){
        return this.age>=18;
    },
    sing : function(){
        return "la la la la la la"
    }

}
function createUser(firstName,lastName,email,age,address){
    const user=Object.create(userMethods)
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age
    user.address = address
    user.about = userMethods.about
    user.is18 = userMethods.is18
    user.sing = userMethods.sing
    return user
}
const user1 = createUser("pavan","bembde","pavan@gmail.com",19,"myaddress")
const user2 = createUser("pava","bembde","pavan@gmail.com",18,"myaddress")
const user3 = createUser("pavana","bembde","pavan@gmail.com",1,"myaddress")

console.log(user2)
console.log(user1.about())
