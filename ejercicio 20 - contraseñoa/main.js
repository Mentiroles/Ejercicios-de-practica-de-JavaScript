const password = (cadena) => {
    if(cadena === ""){
        return ""
    }else {
    let arreglo = Array.from(cadena)
    const codificado = arreglo.map((e)=>{
        if(e === e.toUpperCase() ){
            return e = e.toLowerCase()
        }if (e === "a" ){
            return e = "4"
        }if (e === "e"){
            return e = "3"
        }if (e === "i"){
            return e = "1"
        }if (e ==="o") {
            return e = "0"
        }else{
            return e
        }
    })
    const todaviaNo = codificado.filter((e)=>{
        if (e !== " "){
            return e
        }
    })
    
    const contraseña = todaviaNo.reduce((x,y)=>{
        return x + y
    })
    return contraseña
}
}

console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // "
