const min = (arreglo)=>{
    let numeroMin= arreglo.reduce((x,y)=>{
        if(x<y){
            return x
        }else{
            x = y
            return x
        }
    })
    return numeroMin
}

console.log(min([3, 9, 6,1])) // 3
console.log(min([67, 35, 54,1, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7,1])) // 2
