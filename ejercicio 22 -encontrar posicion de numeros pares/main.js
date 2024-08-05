const posiciones = (arreglo) => {
    return arreglo.reduce((acc, elem, index) => {
        if (elem % 2 === 0) {
            return index
        }
        return acc;
    }, []);
};

// código de prueba
console.log(posiciones([1, 2, 3, 4, 5, 6])); // [1, 3, 5]
console.log(posiciones([])); // []
