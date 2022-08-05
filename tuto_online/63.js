// some method

const numbers = [3,5,8,9]

// kya  ek bhi no ais ahai jo even hai
// true

// function Evensome(number){
//     return number%2===0
// }
// const ans = numbers.some(Evensome)
// console.log(ans)

// eg
// 100000 se upar

const userCart = [
    { productId: 1, productName: "mobile", price: 10000 },
    { productId: 2, productName: "laptop", price: 20000 },
    { productId: 3, productName: "tv", price: 15000 },
    { productId: 3, productName: "macbook", price: 250000 }
    
]
function high(cartItem){
    return cartItem.price > 100000
}
const ans = userCart.some(high)
console.log(ans)
