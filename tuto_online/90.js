// getter and setters
class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName
        this.lastName = lastName
         this.age = age
    }
    get fullname(){
        return `${this.firstName} ${this.lastName}`
    }
    // setName(firstName,lastName){
    //     this.firstName =firstName
    //     this.lastName =lastName
    // }
    set fullname(fullname){
        const [firstName,lastName] = fullname.split(" ")
        this.firstName= firstName
        this.lastName = lastName
    }
}

const person1 =new Person("Pavan","pava")
// console.log(person1.fullname)
// console.log(person1.firstName)
// console.log(person1.lastName)
// person1.setName("mohit","sharma")
// console.log(person1.firstName)
// console.log(person1.lastName)

person1.fullname = "mohit sharma"
console.log(person1)