function somarMatriz(matriz) {
    let soma = 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j]
        }
    }
    return soma
}

const arr1 = [
    [1, 2],
    [3, 4]
]

const arr2 = [
    [5, 5], [5, 5], [5, 5]
]

console.log(somarMatriz(arr1))
console.log(somarMatriz(arr2))