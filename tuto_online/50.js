// block scope vs function scope

// let and const are bolck scope
// var is function scope

// if(true){
//     let firstname = "harshit"
//     console.log(firstname)

// }

// if(true){
//     var firstname = "harshit"
//     console.log(firstname)

// }
// console.log(firstname)
function myapp() {
    if (true) {
        var firstname = "pavan"
        console.log(firstname)
    }
    console.log(firstname)
}
myapp()