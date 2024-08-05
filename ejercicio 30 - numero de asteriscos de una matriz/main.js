const numAsteriscos = (matriz) => {

    let total = 0
    for (let i = 0; i < matriz.length; i++) {
        const arreglo = matriz[i];
        for (let j = 0; j < arreglo.length; j++) {
            const elemento = arreglo[j];
            if (elemento == '*' ){
                total += 1
            }
        }
        
    }
    return total
    
};
// código de prueba
// escribe tu función acá

// código de prueba
console.log(numAsteriscos([
    ['*', '', '*'],
    ['', '*', ''],
    ['*', '', '*']
  ]))
  // 5