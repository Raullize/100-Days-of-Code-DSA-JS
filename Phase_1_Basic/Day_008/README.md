# Day 008: Introdução à Busca Linear (O(n))

## 🎯 Desafio

Implementar uma função em JavaScript chamada `buscaLinear(array, alvo)` que recebe um array (desordenado) e um valor alvo. A função deve retornar o índice do primeiro elemento encontrado que corresponde ao alvo, ou -1 se o alvo não estiver presente. **A busca deve parar assim que o alvo for encontrado.**

**Exemplo:**

| Input (array, alvo) | Output (índice) |
| :--- | :--- |
| `([5, 8, 2, 10, 3], 10)` | `3` |
| `([5, 8, 2, 10, 3], 7)` | `-1` |

---

## 💡 Dicas e Spoilers

<details>
  <summary><strong>Clique aqui para revelar as dicas (Spoiler Alert!)</strong></summary>

A chave é usar um loop `for` e a instrução `return` dentro do loop para sair da função imediatamente assim que o elemento for encontrado (otimização).

</details>

---

⬅ **[Voltar para README.md principal](../../README.md)**