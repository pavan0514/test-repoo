// lexical enviroment, scope chain

const lastName = "Bembde"

const printName = function(){
    const firstName = "Pavan"
    function myFunction (){
        console.log(firstName)
        console.log(lastName)
    }
    myFunction()
}
printName()