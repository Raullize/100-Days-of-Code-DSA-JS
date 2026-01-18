function somarDiagonais(matrizQuadrada) {
    let soma = 0;
    let n = matrizQuadrada.length;

    for (let i = 0; i < n; i++) {
        soma += matriz[i][i];

        soma += matriz[i][n - 1 - i];
    }

    if (n % 2 !== 0) {
        let meio = Math.floor(n / 2);
        soma -= matriz[meio][meio];
    }

    return soma;
};

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(somarDiagonais(matriz));