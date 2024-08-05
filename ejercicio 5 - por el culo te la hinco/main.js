

const likes = (numero) => {

    if (numero >= 1000 && numero < 10000000) {
        const numeroReducido = numero / 1000 ;
        const numeroString = parseInt(numeroReducido) + "K" ;
        return numeroString;
    }
    if (numero > 10000000) {
        const numeroReducido = numero / 1000000 ;
        const numeroString = parseInt(numeroReducido) +"M";
        return numeroString;
    }
    else {
        const numeroString = parseInt(numero);
        return numeroString;
    }

}

console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"