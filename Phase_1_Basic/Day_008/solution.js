function buscaLinear(array, alvo) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === alvo) {
            return i
        }
    }
    return -1
}

arr = [5, 8, 2, 10, 3]

console.log(buscaLinear(arr, 10))
console.log(buscaLinear(arr, 7))