// reduce method

const numbers = [1, 2, 3, 4, 5, 6, 10]
//  aim:sum of all the numbers

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
})
console.log(sum)

// accumalator      currentvalue       return

// 1                   2               3
// 3                   3               6
// 6                   4               10
// 10                  5               15
// 15                  6               21
// 21                  10              31


const userCart = [
    { productId: 1, productName: "mobile", price: 10000 },
    { productId: 2, productName: "laptop", price: 20000 },
    { productId: 3, productName: "tv", price: 15000 }

]


const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.price
}, 0)
console.log(totalAmount)

