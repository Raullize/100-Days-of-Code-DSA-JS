function verificarNotaSwitch(nota) {
    switch (nota) {
        case 0:
            return "Ruim"
        case 1:
            return "Regular"
        case 2:
            return "Bom"
        case 3:
            return "Execelente"
        default:
            return "Nota Invalida"
    }
}

function verificarNotaMapping(nota) {
    const notas = {
        0: "Ruim",
        1: "Regular",
        2: "Bom",
        3: "Execelente"
    }

    return notas[nota] || "Nota Invalida"
}

let n1 = 0
let n2 = 1

console.log(verificarNotaSwitch(n1))
console.log(verificarNotaMapping(n2))