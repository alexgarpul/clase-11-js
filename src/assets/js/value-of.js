let num = 10
let numObj = new Number(10)

console.log(typeof num)


let nuevoValor = numObj
if (nuevoValor.valueOf() === 10) console.log('es un numero') 
console.log(nuevoValor)
