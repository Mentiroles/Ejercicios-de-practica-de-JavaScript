
const contarRango = (x,y) => {

if (x > y) {
    
    return x-y-1;
}
else {
    return y -x-1;
}

}

console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0