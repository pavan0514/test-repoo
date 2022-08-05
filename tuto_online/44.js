// // functions
// function singhappybirthday(){
//     console.log("happy birthday to you")
// }
// // singhappybirthday()

// function sumTwoNumbers(number1,number2){
//     return number1 +number2
// }
// const returnedvalue =sumTwoNumbers(4,5)
// console.log(returnedvalue)

// eg 1
// function isEven(number){
//     if(number%2===0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isEven(5))

// eg 2
// function isEven(number){
// return number % 2 ===0
// }
// console.log(isEven(4))

// eg3

// function firstchar(anystring){
//     return anystring[0]
// }
// console.log(firstchar("pav"))

// eg 4
// function
// input: Array,Target
// output:index of Target

function findTarget(array,target){
    for( let i=0; i<array.length; i++){
    if(array[i]===target){
        return i;
    }
}
return -1;
}
const myArray = [1,2,5,85]
const ans = findTarget(myArray,74)
console.log(ans)

