// escribe tu función acá
const terminanConS = (arreglo)=>{
const nuevoArreglo = arreglo.filter((e)=>{
    if (e.charAt(e.length -1) == "s"){
        return e
    }
})

return nuevoArreglo

}
// código de prueba

// código de prueba
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []