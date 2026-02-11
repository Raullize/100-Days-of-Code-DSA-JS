function pesquisarMatriz(matriz, alvo) {
    let linha = 0
    let coluna = matriz[0].length - 1

    while (linha < matriz.length && coluna >= 0) {
        if (alvo === matriz[linha][coluna]) {
            return true
        } else if (alvo > matriz[linha][coluna]) {
            linha++
        } else {
            coluna--
        }
    }
    return false
}

const mtz = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
]

const alv = 5

console.log(pesquisarMatriz(mtz, alv))