// lexical scope
const myvar = "value1"

function app() {

    function myfunc() {
        // const myvar ="value14"
        const myfunc2 = () => {
            console.log("inside my func", myvar)
        }
        myfunc2()
    }
    console.log(myvar)
    myfunc()
}
app()