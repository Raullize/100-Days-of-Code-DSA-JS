function buscaBinaria(arrayOrdenado, alvo) {
    let inicio = 0
    let fim = arrayOrdenado.length - 1

    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2)
        if (arrayOrdenado[meio] === alvo) {
            return meio
        } else if (arrayOrdenado[meio] > alvo) {
            fim = meio - 1 
        } else {
            inicio = meio + 1
        }
    }
    return -1
}

arr = [2, 5, 8, 10, 15, 20]

console.log(buscaBinaria(arr, 20))
console.log(buscaBinaria(arr, 7))