// escribe tu función acá
const empiezanConA = (arreglo)=>{
const nuevoArreglo = arreglo.filter((e)=>{
    if (e.charAt(0).toLowerCase() == "a"){
        return e
    }
})
return nuevoArreglo
}
// código de prueba
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []