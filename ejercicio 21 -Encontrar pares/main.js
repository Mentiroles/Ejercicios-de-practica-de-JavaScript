const pares = (arreglo) => {
    const arregloPar = arreglo.filter((e)=>{
        return  e % 2 == 0;
    })
    return arregloPar
}
console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []
