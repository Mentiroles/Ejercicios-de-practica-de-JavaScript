
// escribe tu función acá
const duplicar = (arreglo)=>{
const nuevoArreglo= arreglo.map((e)=>{
    return e = e*2 
})
return nuevoArreglo
}
// código de prueba
console.log(duplicar([1, 2, 3])) // 
console.log(duplicar([])) // []