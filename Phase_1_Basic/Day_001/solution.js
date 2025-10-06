function classificarNumero(numero) {
    if (numero === 0) {
        return "Neutro"
    } else if (numero < 0) {
        return "Negativo"
    } else if (numero % 2 === 0) {
        return "Positivo e Par"
    } else if (numero % 2 === 1 ) {
        return "Positivo e Impar"
    } else {
        return "Insira um valor válido"
    }
}

console.log(classificarNumero(0))
console.log(classificarNumero(-1))
console.log(classificarNumero(2))
console.log(classificarNumero(1))
console.log(classificarNumero("Teste"))