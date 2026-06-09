# Day 013: Implementando Splice Imutável (Immutability)

## 🎯 Desafio

Implementar uma função em JavaScript chamada `imutableSplice(arrayOriginal, indice, remover, ...elementos)` que simula a funcionalidade do método mutável `.splice()`.

A função deve **retornar um NOVO array** resultante da operação (remoção e/ou adição) e **NÃO deve modificar o `arrayOriginal`**.

**Assinatura da Função:** `imutableSplice(arrayOriginal, indice, remover, ...elementos)`

**Exemplos:**

| Operação | Array Original | Input (ind, rem, elem) | Output (Novo Array) |
| :--- | :--- | :--- | :--- |
| **Remoção** | `[10, 20, 30, 40]` | `(1, 2)` | `[10, 40]` |
| **Adição** | `[10, 20, 30, 40]` | `(1, 0, 'A', 'B')` | `[10, 'A', 'B', 20, 30, 40]` |
| **Substituição** | `[10, 20, 30, 40]` | `(2, 1, 99)` | `[10, 20, 99, 40]` |

---

## 💡 Dicas e Spoilers

<details>
  <summary><strong>Clique aqui para revelar as dicas (Spoiler Alert!)</strong></summary>

O array final será a combinação de três partes construídas com `.slice()` e o Spread Operator (`...`):

$$[\dots \text{Primeira Parte}, \dots \text{Elementos Adicionais}, \dots \text{Segunda Parte}]$$

* **Primeira Parte:** `arrayOriginal.slice(0, indice)`
* **Segunda Parte:** `arrayOriginal.slice(indice + remover)`

</details>

---

⬅ **[Voltar para README.md principal](../../README.md)**