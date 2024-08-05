const transcribir = (cadena) => {

    const arreglo = Array.from(cadena);
    const arregloTranscripto = arreglo.map((e)=>{
        if (e == "G"){
            return "C"
        }if (e == "C"){
            return "G"
        }if (e == "T"){
            return "A"
        }if (e == "A"){
            return "U"
        }
    })
    const cadenaTranscripta = arregloTranscripto.reduce((x,y)=>{
        return x+y
    })
    return cadenaTranscripta
}

console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"