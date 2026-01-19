function transporMatriz(matrizOriginal) {
    const transposta = []
    let n = matrizOriginal.length;
    let m = matrizOriginal[0].length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (!transposta[j]) transposta[j] = []
            transposta[j][i] = matrizOriginal[i][j]
        }
    }

    return transposta
}

const matriz = [
    [1, 2, 3],
    [4, 5, 6]
]

console.log(transporMatriz(matriz))