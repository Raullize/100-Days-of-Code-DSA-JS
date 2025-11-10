function imutableSplice(arrayOriginal, indice, remover, ...elementos) {
    const firstPart = arrayOriginal.slice(0, indice)
    const secondPart = arrayOriginal.slice(indice + remover)
    return [...firstPart, ...elementos, ...secondPart]
}

const arr = [10, 20, 30, 40]

console.log(imutableSplice(arr, 1, 2))
console.log(imutableSplice(arr, 1, 0, 'A', 'B'))
console.log(imutableSplice(arr, 2, 1, 99))