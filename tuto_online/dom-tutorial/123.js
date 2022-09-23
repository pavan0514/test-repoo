const allButtons = document.querySelectorAll(".my-buttons button")
// console.log(allButtons)

for(button of allButtons){
    button.addEventListener("click",(e)=>{
        console.log(e.currentTarget)
    })
}