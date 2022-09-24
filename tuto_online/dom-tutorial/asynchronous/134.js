// promise

const bucket = ["coffee", "chips", "vegetables", "salt", "rice"]

const friedRicePromise = new Promise((resolve, reject) => {
    if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve({value:"Fried Rice"})
    } else {
        reject("could not do it")
    }

})

// produce


// consume
// how to consume

friedRicePromise.then((myfriedRice) => { //jab promise resolve hoga
    console.log("lets it", myfriedRice)
}, (error) => {                    //jab promose reject hoga
    console.log(error)
})