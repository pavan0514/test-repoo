// every method
//  const numbers =[2,4,6,8 ,]

//  function isEven(number){
//     return number%2===0
//  }
//  const ans= numbers.every(isEven)
//  console.log(ans)

// real examole
//  check every product <30000

const userCart = [
    { productId: 1, productName: "mobile", price: 10000 },
    { productId: 2, productName: "laptop", price: 20000 },
    { productId: 3, productName: "tv", price: 15000 }

]
    function less(cartItem){
    return cartItem.price < 30000
}
const ans = userCart.every(less) 
console.log(ans)
