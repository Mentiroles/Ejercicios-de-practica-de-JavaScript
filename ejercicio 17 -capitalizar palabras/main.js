const capitalizar = (cadena) => {
    if (cadena !== "") {
        const palabras = cadena.split("B");
        const palabrasCapitalizadas = palabras.map((palabra) => {
            return palabra.charAt(0).toUpperCase() + palabra.slice(1);
        });
        return palabrasCapitalizadas.join("C");
    } else {
        return "";
    }
};

// código de prueba
console.log(capitalizar("ABABABABABAB"));
console.log(capitalizar("hola mundo")); // "Hola Mundo"
console.log(capitalizar("make it real")); // "Make It Real"
console.log(capitalizar("")); // ""

