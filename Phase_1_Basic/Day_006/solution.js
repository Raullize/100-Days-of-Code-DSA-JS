function formatarNome(nomeCompleto) {
    return nomeCompleto
    .trim()
    .toLowerCase()
    .split(' ')
    .map(palavra => palavra[0].toUpperCase() + palavra.slice(1))
    .join(' ')
}

let nome = " joão da silva "

console.log(formatarNome(nome))