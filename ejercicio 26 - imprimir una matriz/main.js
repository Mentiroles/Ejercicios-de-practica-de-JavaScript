const imprimirMatriz = (matriz) => {
    for (let i = 0; i < matriz.length; i++) {
        const arreglo = matriz[i];
        for (let j = 0; j < arreglo.length; j++) {
            const elemento = arreglo[j];
            console.log(elemento);
        }
        
    }
    
};
// código de prueba
imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
  
  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  // 7
  // 8
  // 9