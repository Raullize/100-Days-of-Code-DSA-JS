function encontrarMaisFrequente(array) {
    let frequencia = {}

    for (let valor of array) {
        if (frequencia[valor]) {
            frequencia[valor] += 1
        } else {
            frequencia[valor] = 1
        }
    }

    let elementoMaximo = null;
    let contagemMaxima = 0;

    for (const elemento in frequencia) {
        const contagemAtual = frequencia[elemento];

        if (contagemAtual > contagemMaxima) {
            contagemMaxima = contagemAtual;
            elementoMaximo = elemento;
        }
    }

    return elementoMaximo;

}

const arr = ['a', 'b', 'c', 'a', 'a', 'b']

console.log(encontrarMaisFrequente(arr))