// find method

const myArray = ["Hello", "cat", "dog", "lion"]

// function islength3(string){
//     return string.length===3
// }
// const ans =myArray.find(islength3)
// console.log(ans)

// using Array

// const ans = myArray.find((String)=>String.length===5)
// console.log(ans)

const users = [
    { userId: 1, userName: "pavan" },
    { userId: 2, userName: "harshit" },
    { userId: 3, userName: "soham" },
    { userId: 4, userName: "nitish" }
]
const myuser = users.find((user) =>{
     return user.userId === 4
})
console.log(myuser)