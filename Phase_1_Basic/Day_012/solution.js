function checarAnagramaPalindromo(texto) {
    const textoLimpo = texto
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '')
    
    const freqObj = textoLimpo
        .split('')
        .reduce((acc, charAtual) => {
            acc[charAtual] = acc[charAtual] ? acc[charAtual] + 1 : 1
            return acc
        }, {})

    let oddCounter = 0
    
    for (let letra in freqObj) {
        if (freqObj[letra] % 2 === 1) {
            oddCounter += 1
        }
    }
    return oddCounter <= 1
}

let texto1 = "aabbc"
let texto2 = "Ame o poema!"
let texto3 = "aabbcde"

console.log(checarAnagramaPalindromo(texto1))
console.log(checarAnagramaPalindromo(texto2))
console.log(checarAnagramaPalindromo(texto3))