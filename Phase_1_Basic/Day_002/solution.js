function inverterString(texto) {
    let palavraInvertida = ""
    
    for (let i = texto.length - 1; i >= 0; i--) {
            palavraInvertida += texto[i] 
    }
    return palavraInvertida
}

let palavra = "javascript"

console.log(inverterString(palavra))