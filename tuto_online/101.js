function func(){
    let counter = 0
    return function(){
        if(counter<1){
            console.log("hi u called me")
            counter++
        }else{
            console.log("already called")
        }
    }
}

const myfunc = func()
myfunc()
myfunc()
myfunc()
 
const myfunc2 = func()
func()
