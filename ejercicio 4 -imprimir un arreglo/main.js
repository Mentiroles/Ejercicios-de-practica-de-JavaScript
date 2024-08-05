
const arreglo = [1, "Hola", 2, "Mundo"]

const otroarreglo = [8, 8]
const imprimirArreglo = (array) => {

    for (i= 0; i < array.length   ; i ++ ){
        const elemento = array[i]
        console.log(elemento)
    }
}

imprimirArreglo(arreglo)
imprimirArreglo(otroarreglo)