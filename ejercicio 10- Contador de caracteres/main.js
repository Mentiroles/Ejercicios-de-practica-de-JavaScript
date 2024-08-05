
const numeroDeCaracteres = (cadena, caracter)=>{
    const arreglo = Array.from(cadena);
    let acumulador = 0 ;

    for (i=0; i<=arreglo.length; i++){
        if(arreglo[i] == caracter){
            acumulador+=1
        }
    }
    return acumulador;
}
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4