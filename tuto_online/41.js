// object desrtucturing

const band = {
    bandName: "led zepplin",
    famouseSong: "stair away",
    year: 1968,
    anotherFamouseSong: "Kashmir"
}

let { bandName: var1, famouseSong: var2, ...restprops } = band
console.log(var2, restprops)

const { year: var3, anotherFamouseSong: var4 } = band
console.log(var3, var4)