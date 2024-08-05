
const distancia = (cadena1, cadena2) => {
    const arreglo1 = Array.from(cadena1)
    const arreglo2 = Array.from(cadena2)
    let diferenciaLongitud = 0
    let longitud = 0
    if (arreglo1.length< arreglo2.length){
        let diferenciaLongitud = arreglo2.length - arreglo1.length
        let longitud =arreglo1.length
    }else{
        let diferenciaLongitud = arreglo1.length - arreglo2.length
        let longitud =arreglo2.length
    }
    let total = 0

    for (i=0; i< longitud ; i++){
        if (arreglo1[i] !== arreglo2[i]){
            total += 1
        }
    }
    return total + diferenciaLongitud
}




// código de prueba
console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3
console.log(distancia("carro", "correrse")) // 3
console.log(distancia("carromato", "correr")) // 3
