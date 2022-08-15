// static methods and properties

class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName
        this.lastName = lastName
         this.age = age
    }
    static classInfo(){
        return "this is person class"
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
const person1 = new Person("Harshot","sharma",5)
const inInfo = Person.classInfo()
console.log(inInfo)