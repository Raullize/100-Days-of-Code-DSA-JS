function dobrarPares(arrayDeNumeros) {
    return arrayDeNumeros
        .filter(num => num % 2 === 0)
        .map(num => num * 2)
}

const arr = [1, 2, 3, 4, 5, 6]

console.log(dobrarPares(arr))