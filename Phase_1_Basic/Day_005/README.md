# Day 005: Métodos Essenciais de Array (Reduce e Combinados)

## 🎯 Desafios

### 1. Desafio: Contagem de Frequência (`solution.js`)

Implementar uma função em JavaScript chamada `contarFrequencia(arrayDeNomes)` que recebe um array de strings e utiliza o método **`.reduce()`** para retornar um objeto que conta a frequência de cada nome.

**Exemplos:**

| Input (arrayDeNomes) | Output (Objeto) |
| :--- | :--- |
| `['João', 'Maria', 'João', 'Ana', 'Maria', 'João']` | `{ 'João': 3, Maria: 2, Ana: 1 }` |

### 2. Desafio: Filtragem e Desconto em Objetos (`solution2.js`)

Implementar uma função em JavaScript chamada `processarProdutos(listaDeProdutos)` que recebe um array de objetos. A função deve **filtrar** os produtos da categoria "eletronico" e, em seguida, **mapear** o array resultante para retornar o nome do produto e seu preço com 10% de desconto (`precoComDesconto`).

**Exemplo:**

| Input (listaDeProdutos) | Output (Array de Objetos) |
| :--- | :--- |
| ```[ { nome: 'Monitor', preco: 800, categoria: 'eletronico' }, { nome: 'Caderno', preco: 20, categoria: 'papelaria' }, { nome: 'Mouse', preco: 150, categoria: 'eletronico' }, { nome: 'Caneta', preco: 5, categoria: 'papelaria' } ]``` | ```[ { nome: 'Monitor', precoComDesconto: 720 }, { nome: 'Mouse', precoComDesconto: 135 } ]``` |

---

⬅ **[Voltar para README.md principal](../../README.md)**