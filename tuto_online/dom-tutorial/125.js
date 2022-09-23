// little prctice with click event

const allButtons = document.querySelectorAll(".my buttons ")
// console.log(allButtons)
allButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        // console.log(e.target)
        e.target.backgroundColor = "yellow"
        e.target.Color
    })

})