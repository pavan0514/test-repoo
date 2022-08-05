// // spread operator
// const array1= [1,2,3]
// const array2=[4,5,6]

// const newArray=[...array1,...array2,..."123456"]
// console.log(array1)
// console.log(array2)
// console.log(newArray)

// spread operatorin objects

const obj1={
    key1:"value1",
    key2:"value2"
}

const obj2={
    key1:"unique",
    key3:"value3",
    key4:"value4"
}

const newobj={...obj1,...obj2,key12:"value12"}
console.log(newobj)