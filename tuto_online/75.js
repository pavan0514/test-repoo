// arrow functions
const user1 = {
    firstName: "harshit",
    age: 8,
    about:()=>{
        console.log(this.firstName,this.age)
    }

    }
    user1.about(user1)
// aroow function this ek level up lega matalb user se 
// pahle window lega