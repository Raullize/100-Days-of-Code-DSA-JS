# Day 007: Arrays e Imutabilidade (Slice vs. Splice)

## 🎯 Desafio

Implementar uma função em JavaScript chamada `removerEObter(arrayOriginal, indice, quantidade)` que simula o comportamento de remoção de elementos em um array, mas **sem modificar o array original**.

A função deve retornar um array contendo apenas os elementos que seriam removidos. **É proibido o uso do método `splice()`**.

**Exemplos:**

| Input (arrayOriginal) | Input (Índice, Quantidade) | Output (Elementos Removidos) |
| :--- | :--- | :--- |
| `[10, 20, 30, 40, 50]` | `(1, 3)` | `[20, 30, 40]` |

---

⬅️ **[Voltar para README.md principal da Jornada](../../README.md)**