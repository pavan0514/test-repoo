// proto,prototype,class

// function(that function create object)
//2. add kry value pair 
// 3.object ko return karega
function createUser(firstName,lastName,email,age,address){
    const user={}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age
    user.address = address
    user.about = function(){
        return `${this.firstName} is ${this.age} years old`
    };
    user.is18 = function(){
        return this.age>=18;
    }
    return user
}
const user1 = createUser("pavan","bembde","pavan@gmail.com",19,"myaddress")
console.log(user1)
const is18 =user1.is18()
console.log(is18)
const aboutt =user1.about()
console.log(aboutt)
