// inner HTML
const headline = document.querySelector(".headline")
headline.innerHTML = "<h1>inner HTML changed</h1>"
headline.innerHTML += "<button class= \"btn\">learn more</button>"
console.log(headline.innerHTML)