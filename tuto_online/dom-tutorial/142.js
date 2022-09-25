// promises json

// const URL = "://httpsjsonplaceholder.typicode.com/posts"
const URL = "https://jsonplaceholder.typicode.com/posts"

function sendRequest(method, url) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status< 300){
                resolve(xhr.response)
            }else{
                reject(new error("Somethng went wrong"))
            }
}
xhr.send()
    })
}
// xhr.send()
sendRequest("GET",URL)
.then(response =>{
    const data =JSON.parse(response)
    // console.log(data)
    return data
})
.then(data=>{
    // console.log(data[3].id)
    const id =data[3].id
    return id
})
.then(id=>{
    const url  = `${URL}/${id}`
    // console.log(url)
    return sendRequest("GET",url)
})
.then(newResponse =>{
    const newdata = JSON.parse(newResponse)
    console.log(newdata)
})