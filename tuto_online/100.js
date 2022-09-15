console.log("Pavan")

function myFunction(power) {
    return function (number) {
        return number ** power
    }
}
const square = myFunction(2)
const ans = square(5)
console.log(ans)



const cube = myFunction(3)
const ans2 = cube(8)
console.log(ans2)