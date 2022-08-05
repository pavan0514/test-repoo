// filter method

const numbers= [1,2,3,4,5,6,7,8,9,0]

// const isEven = function(number){
//     return number%2===0

// }
// const evenNumber=numbers.filter(isEven)
// console.log(evenNumber)
// // odd

// using array

const oddNumber=numbers.filter((Number)=>{
    return Number%2!==0
})
console.log(oddNumber)

