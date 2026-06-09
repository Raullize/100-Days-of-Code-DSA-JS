# Day 007: Arrays e Imutabilidade (Slice vs. Splice)

## 🎯 Desafio

Implementar uma função em JavaScript chamada `removerEObter(arrayOriginal, indice, quantidade)` que simula o comportamento de remoção de elementos em um array, mas **sem modificar o array original**.

A função deve retornar um array contendo apenas os elementos que seriam removidos. **É proibido o uso do método `splice()`**.

**Exemplos:**

| Input (arrayOriginal) | Input (Índice, Quantidade) | Output (Elementos Removidos) |
| :--- | :--- | :--- |
| `[10, 20, 30, 40, 50]` | `(1, 3)` | `[20, 30, 40]` |

---

## 📝 Diferença entre splice e slice

- splice
  - Altera (mutates) o array original.
  - Assinatura: `array.splice(inicio, quantidade[, ...itens])`.
  - Remove elementos a partir de `inicio`, removendo `quantidade` itens, e retorna um array com os elementos removidos.
  - Pode também inserir ou substituir elementos no lugar removido.
  - Exemplo:
    ```javascript
    const arr = ['a','b','c','d'];
    const removidos = arr.splice(1, 2); // removidos -> ['b','c']
    // arr agora é ['a','d']
    ```

- slice
  - Não altera o array original (retorna um novo array).
  - Assinatura: `array.slice(inicio, fim)`.
  - Retorna elementos do índice `inicio` até `fim` (fim não incluso). `fim` é opcional e aceita índices negativos.
  - Use `slice` quando quiser criar subarrays sem mutar o original.
  - Exemplo:
    ```javascript
    const arr = ['a','b','c','d'];
    const sub = arr.slice(1, 3); // sub -> ['b','c']
    // arr permanece ['a','b','c','d']
    ```

---

⬅ **[Voltar para README.md principal](../../README.md)**