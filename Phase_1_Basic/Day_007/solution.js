function removerEObter(arrayOriginal, indice, quantidade) {
    let indiceFinal = indice + quantidade

    return arrayOriginal.slice(indice, indiceFinal)
}

arr = [10, 20, 30, 40, 50]

console.log(removerEObter(arr, 1, 3))