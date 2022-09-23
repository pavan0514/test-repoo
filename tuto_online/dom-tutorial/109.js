// loop
// const navItems = document.getElementsByTagName("a")
// console.log(navItems)

// we cant use forEach method to iterate through HTMLCollection
// simple for loop
// for of loop
// forEach loop

// for (let i = 0; i < navItems.length; i++) {
//     // console.log(navItems)   
//     const navItem = navItems[i]
//     navItem.style.backgroundColor = "#fff"
//     navItem.style.color = "green"
// }

// for of loop

// for(navItem of navItems){
//     const navItem = navItems[i]
//     navItem.style.backgroundColor = "#fff"
//     navItem.style.color = "green"
//     navItem.style.fontWeight ="bold"

// }


// node items

let navItems =document.querySelectorAll("a")
for(let i=0; i<navItems.length;i++){
const navItem = navItems[i]
navItem.style.backgroundColor = "#fff"
navItem.style.color = "green"
}