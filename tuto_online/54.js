// callback function

function myfunc2(name) {
    console.log("inside my func2")
    console.log(`your name is ${name}`)

}

function myfunc(callback) {
    console.log("hello world")
    callback("Pavan")
}
myfunc(myfunc2)