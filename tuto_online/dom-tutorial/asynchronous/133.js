// // callback , callback hell , pyramid of doom
// // callback hell 

const heading1=document.querySelector(".heading1")
const heading2=document.querySelector(".heading2")
const heading3=document.querySelector(".heading3")
const heading4=document.querySelector(".heading4")
const heading5=document.querySelector(".heading5")
const heading6=document.querySelector(".heading6")
const heading7=document.querySelector(".heading7")
// setTimeout(()=>{
//   heading1.textContent = "One"  
//   heading1.style.color = "violet"
//   setTimeout(()=>{
//     heading2.textContent = "Two"
//     heading2.style.color = "purple"
//     setTimeout(()=>{
//         heading3.textContent = "Three"
//         heading3.style.color = "red"
//         setTimeout(()=>{
//             heading4.textContent = "Four"
//             heading4.style.color = "pink"
//             setTimeout(()=>{
//                 heading5.textContent = "Five"
//                 heading5.style.color = "green"
//                 setTimeout(()=>{
//                     heading6.textContent = "Six"
//                     heading6.style.color = "blue"
//                     setTimeout(()=>{
//                         heading7.textContent = "Seven"
//                         heading7.style.color = "brown"
                        
//                       },1000)
//                   },3000)
//               },1000)
//           },2000)
//       },2000)
    
//   },2000)
// },1000)

// function

function changeText(element, text, color,time){
    setTimeout(()=>{
        element.textContent = text
        element.style.color = color
    },time)
}
changeText(heading1,"one","violet",1000)
changeText(heading2,"Two","red",5000)