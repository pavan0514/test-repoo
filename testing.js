 const num =[11,22,33,25,3,62,65,36,356]
 
 let arr= num.map((v)=>{
    if (v%2==0){
        return 'even'
    }
    else{
        return "false"
    }
 })
 console.log(arr)

//  create arow no with filter 
let arrless500=nms.filter((n)=>{
    return n<500
})
console.log(arrless500)