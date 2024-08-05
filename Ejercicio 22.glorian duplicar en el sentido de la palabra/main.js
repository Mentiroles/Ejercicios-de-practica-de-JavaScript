
// escribe tu función acá
const duplicar = (arreglo)=>{
let arregloPush = [];
const nuevoArreglo = arreglo.map((e)=>{
    return arregloPush.push(e,e) 
})
return arregloPush
}
// código de prueba
console.log(duplicar([1, 2, 3])) // 
console.log(duplicar([])) // []