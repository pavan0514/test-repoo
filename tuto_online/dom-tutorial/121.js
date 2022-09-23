// this keywpod

const btn = document.querySelector(".btn-headline")

// btn.addEventListener("click",function(){
//     console.log("You Clicked!!!!!")
//     console.log("value of this")
//     console.log(this)
// })
//function() ke case me "this" ki value btn ki jo hogo vahi hogi 



btn.addEventListener("click",()=>{
    console.log("You Clicked!!!!!")
    console.log("value of this")
    console.log(this)
})

// arrow func me "this " ki value uper jo console hogi vahi hogi