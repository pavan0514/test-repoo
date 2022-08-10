function about(hobby, favCricketer) {
    console.log(this.firstName, this.age, hobby, favCricketer)
}

const user1 = {
    firstName: "harshit",
    age: 8,

}
const user2 = {
    firstName: "pavan",
    age: 21
}
// call
about.call(user1, "watchingMoie", "sachinTendulkar")

// apply
about.apply(user1, ["movie", "sachin"])

// bind
const func = about.bind(user2, "movie", "sachin")
func()

