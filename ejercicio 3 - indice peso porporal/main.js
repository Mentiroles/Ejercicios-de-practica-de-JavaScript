const bmi = (peso, altura) => {
    
    const imc = peso / (altura ** 2);
    let resultado;

    if (imc < 18.5) {
        resultado = "Peso Bajo";
    } if (imc >= 18 && imc < 24.9) {
        resultado = "Normal";
    } if (imc >= 25 && imc < 29.9) {
        resultado = "Sobrepeso";
    } else {
        resultado = "Obeso";
    }

    return resultado;
};

// código de prueba
console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) // "Peso Bajo"
console.log(bmi(135, 1.7)) // "Obeso"