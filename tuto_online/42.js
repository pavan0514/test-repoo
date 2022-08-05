// object inside array
// very useful in real world application
const users=[
    {userId:1,firstName:'Pavan',gender:'Male'},
    {userId:2,firstName:'Blaji',gender:'Male'},
    {userId:3,firstName:'Bembde',gender:'Male'}

]
for(let user of users){
    console.log(user.firstName)
}