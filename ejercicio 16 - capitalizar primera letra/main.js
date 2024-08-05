
function capitalizar(cadena){
    if (cadena !== ""){
    let arreglo = Array.from(cadena);
    
    arreglo[0] =  arreglo[0].toUpperCase();
    const arregloCapitalizado = arreglo.reduce((x,y)=>
    {
        return x + y;
    })
    

    return arregloCapitalizado
    }else{
        return "";
    }
}


// código de prueba
// código de prueba
console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""