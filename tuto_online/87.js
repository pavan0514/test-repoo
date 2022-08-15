class Animal{
    constructor(name,age){
        this.name=name
        this.age=age
    }

    eat(){
        return `${this.name} is eating`
    }
    isSuperCute(){
        return this.age<=1
    }
    isCute(){
        return true
    }
}

class Dog extends Animal{

}
const tommy = new Dog("tommy",5)
console.log(tommy)
console.log(tommy.isCute())




// const Animal1 = new Animal("tom",1)
// console.log(Animal1)
// console.log(Animal1.eat())
// console.log(Animal1.isSuperCute())
