// closures
// closure : 30-40%
// analysis : 70-80%
// real example : 100%

// function can return function

// function outerFunction(){
//     function innerFunction(){
//         console.log("inner func")
//     }
//     return innerFunction
// }
// const pava = outerFunction()
// console.log(pava)
// pava()



function printFullName(firstName,lastName){
    function printName(){
        console.log(firstName ,lastName)
    }
    return printName
}
const ans = printFullName("Pavan", "Bembde")
// console.log(ans)
ans()