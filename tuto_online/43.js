// nested destucturing
const users = [
    { userId: 1, firstName: 'Pavan', gender: 'Male' },
    { userId: 2, firstName: 'Blaji', gender: 'Male' },
    { userId: 3, firstName: 'Bembde', gender: 'MAle' },
]
const [{ firstName: user1firstname, userId }, , { gender: user3gender }] = users
console.log(user1firstname)
console.log(userId)
console.log(Suser3gender)

// const[usser1,]