// escribe tu función acá
const numerosAPalabras = (arreglo) => {
   
    const traduccion  = arreglo.map((e)=>{
        switch (e) {
            case "cero": 
            return(0) 
            
            case "uno":
                return(1) 
                
            case "dos":
                return(2) 
                case "tres":
                    return(3) 
            
                    case "cuatro":
                        return(4) 
            
                        case "cinco":
                            return(5) 
        
                            case "seis":
                                return(6) 
            
                                case "siete":
                                    return(7) 
            
                                    case "ocho":
                                        return(8) 
            
                                        case "nueve":
                                            return(9) 
            default:
                return(-1)
          }
    })
    return traduccion
}

console.log(numerosAPalabras(["cero", "uno", "dos", "tres", "what?", "cuatro"])) // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras(["cinco", "seis", "siete", "ocho", "nueve"])) // ["cinco", "seis", "siete", "ocho", "nueve"]
