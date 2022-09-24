// synchronous programming vs asynchronous programming
// synchronous programming
// synchronous programming is single threaded
// console.log("script start")

// for (let i = 1; i < 10000; i++){
//     console.log("inside schronouse")
// }

// console.log("end Script")

// asynchronous programming
// setTimeout
// console.log("script start")
// function hello(){
//     console.log("hello world")
// }
// setTimeout(hello,1000)
// console.log("script end")

// console.log("script start")
// setTimeout(()=>{
//     console.log("inside set timeout")
// },1000)
// console.log("script end")


console.log("script start")
const id = setTimeout(() => {
    console.log("inside set timeout")
}, 1000)
for (i = 1; i < 1000; i++){
    console.log(".....")
}
console.log("setTimeoutId",id)
console.log("clearing id")
clearTimeout(id)
    console.log("script end")