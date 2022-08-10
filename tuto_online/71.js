// methods
// function inside object
function personInfo() {
    console.log(`person name is ${this.firstName} and age is ${this.age}`)
}
    const person1 = {
        firstName: "pavan",
        age: 18,
        gender:"male",
        about: personInfo
    }
    const person2 = {
        firstName: "harsh",
        age: 11,
        about: personInfo
    }

    const person3 = {
        firstName: "mohit",
        age: 14,
        about: personInfo
    }



person1.about()
person2.about()
person3.about()
