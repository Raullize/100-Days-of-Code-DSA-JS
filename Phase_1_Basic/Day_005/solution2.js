function processarProdutos(listaDeProdutos) {
return listaDeProdutos
    .filter(produto => produto.categoria === 'eletronico')
    .map(produto => ({ 
        nome: produto.nome,
        precoComDesconto: produto.preco * 0.90
    }))  
}

const arr = [
    { nome: 'Monitor', preco: 800, categoria: 'eletronico' }, 
    { nome: 'Caderno', preco: 20, categoria: 'papelaria' }, 
    { nome: 'Mouse', preco: 150, categoria: 'eletronico' }, 
    { nome: 'Caneta', preco: 5, categoria: 'papelaria' }
]

console.log(processarProdutos(arr))