function checarAnagramaPalindromo(texto) {
    let freqObj = texto
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '')
        .split('')
        .reduce((acc, charAtual) => {
            acc[charAtual] = acc[charAtual] ? acc[charAtual] += 1 : 1
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

let palavra1 = "arara"
let palavra2 = "aabbccd"

console.log(checarAnagramaPalindromo(palavra1))
console.log(checarAnagramaPalindromo(palavra2))