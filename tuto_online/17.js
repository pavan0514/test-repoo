// nested if else

// winning number =19

// 17 to low
// 21 to high

let winningNumber = 19

let userguess= +prompt("guess a number")

if(userguess === winningNumber){
    console.log("u r guess is right")
}else{
    if(userguess<winningNumber){
        console.log("to low")
    }else{
        console.log("to high")
}
}