// sort method

const numbers = [111, 2654, , 2, 5, , 634587, 25, 321]

numbers.sort((a, b) => {
    return b - a

})
console.log(numbers)



const products = [
    { productId: 1, productName: "mobile", price: 10000 },
    { productId: 2, productName: "laptop", price: 20000 },
    { productId: 3, productName: "tv", price: 15000 },
    { productId: 4, productName: "tab", price: 18000 },
    { productId: 5, productName: "headphone", price: 500 }

]
// low to high
products.sort((a, b) => {
    return a.price - b.price
})
console.log(products)

// high to low

const highTolow = products.slice(0).sort((a, b) => {
    return b.price - a.price
})
console.log(highTolow)