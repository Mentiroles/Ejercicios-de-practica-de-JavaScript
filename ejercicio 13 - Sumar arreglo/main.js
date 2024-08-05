const sumarArreglo = (arreglo, pi, pf) =>{
    let a = arreglo
    return a.reduce((x,y)=>{
    if(arreglo[pf] == arreglo[pi]){
        return 0
    }
    if(y < arreglo[pf]){
    return x + y
    }
    else{
        return x
    }
    },arreglo[pi])
}

console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArreglo([7, 8, 9], 2, 2)) // 0