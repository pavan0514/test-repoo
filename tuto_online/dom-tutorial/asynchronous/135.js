// function returning promise
function ricePromise(){
    const bucket = ["coffee", "chips", "vegetables", "salt", "rice"]
return new Promise((resolve, reject) => {
    if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve({value:"Fried Rice"})
    } else {
        reject("could not do it")
    }

})
    
}

ricePromise().then((myfriedRice) => { //jab promise resolve hoga
    console.log("lets it", myfriedRice)
}, (error) => {                    //jab promose reject hoga
    console.log(error)
})