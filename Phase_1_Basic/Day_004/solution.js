function somarValores(objeto) {
    let somaTotal = 0
    for(let produto in objeto) {
        somaTotal += objeto[produto]
    }
    return somaTotal
}

obj = {
    cafe: 5.0,
    pao: 3.0,
    leite: 7.5
}

console.log(somarValores(obj))