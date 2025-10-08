function contarFrequencia(arrayDeNomes) {
    return arrayDeNomes.reduce((acc, nomeAtual) => {
        acc[nomeAtual] = acc[nomeAtual] ? acc[nomeAtual] + 1 : 1
        return acc
    }, {})
}

arr = ['João', 'Maria', 'João', 'Ana', 'Maria', 'João']

console.log(contarFrequencia(arr))