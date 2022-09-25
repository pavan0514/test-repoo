// asinc await
// fetch(URL)
// .then(response=>{
//     return response.json()
// })
// .then(data=>{
//     console.log(data)
// })
const URL = "https://jsonplaceholder.typicode.com/posts"
async function getPost() {
    const response = await fetch(URL)
    const data= await response.json()
    // console.log(data)
    return data
}
getPost()
.then((myData)=>{
    console.log(myData)
})
.catch((error)=>{
    console.log("inside catch")
    console.log(error)
})