// escribe tu función acá
function numAsteriscos(arreglo){
    let total = 0
    const cuenta = arreglo.map((e)=>{
        if(e === "*"){
            total += 1
        }
    })
    return total
}
// código de prueba
;
console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) 