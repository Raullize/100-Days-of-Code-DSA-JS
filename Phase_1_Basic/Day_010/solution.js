function checarPalindromo(texto) {
    let inicio = 0
    let fim = texto.length - 1
    
    texto = texto.toLowerCase().trim()

    while(inicio < fim) {
        if (texto[inicio] !== texto[fim]) {
            return false
        }
        inicio++
        fim--
    }
    return true
}

let palavra1 = "arara"
let palavra2 = "casa"

console.log(checarPalindromo(palavra1))
console.log(checarPalindromo(palavra2))