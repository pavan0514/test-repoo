// // understand calback

// function myFunc(callback){
//     console.log("function is doing task 1")
//     callback()
// }

//  myFunc(()=>{
//     console.log("function is doing task 2")
// })


function getTwoNumbers(number1, number2, calback) {
    console.log(number1, number2)
    calback(number1, number2)
}
function addTwoNumber(num1, num2) {
    console.log(num1 + num2)
}

getTwoNumbers(4, 5, addTwoNumber)

