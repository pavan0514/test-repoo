// arrow function
const singhappybirthday = () => {
    console.log("happy birthday ")
}
singhappybirthday()


const sumTwoNumbers = (number1, number2) => {
    return number1 + number2
}
const ans = sumTwoNumbers(4, 5)
console.log(ans)

const isEven = (number) => {
    return number % 2 === 0
}
console.log(isEven(4))

const findTarget = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}
const myArray = [1, 2, 5, 85]
const anss = findTarget(myArray, 74)
console.log(anss)
