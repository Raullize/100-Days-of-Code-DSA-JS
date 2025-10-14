class Contador {
    constructor() {
        this.valor = 0
    }
    incrementar() {
        this.valor++
    }
    decrementar() {
        this.valor--
    }
    obterValor() {
        return this.valor
    }
}

const c = new Contador();
c.incrementar();
c.incrementar();
c.decrementar();
console.log(c.obterValor());