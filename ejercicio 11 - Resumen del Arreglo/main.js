const sumarArreglo = (arreglo) => {
    let a = arreglo
    return a.reduce((x,y)=> x+y , 0)
}
console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0ç