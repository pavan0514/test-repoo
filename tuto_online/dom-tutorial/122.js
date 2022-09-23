const allButtons = document.querySelectorAll(".my-buttons button")
// console.log(allButtons)

for(button of allButtons){
    button.addEventListener("click",function(){
        console.log(this)
    })
}



// forEach

// allButtons.forEach(function(button){
//     button.addEventListener("click",function(){
//         console.log("this")
//     })
// })