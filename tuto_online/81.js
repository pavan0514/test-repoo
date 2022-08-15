function hello(){
    console.log("hello world")
}
// console.log(hello())
// hello()

// javascript function ===> function + object

// hello.myOwnProperty = "very unique value"
// console.log(hello.myOwnProperty) 

// name property --> tells function name

// function provides more useful property

// console.log(hello.prototype) {}

// only function provides prototype property

hello.prototype.abc = "abc"
hello.prototype.sing = function(){
    return "lalala"
}
console.log(hello.prototype.sing())
