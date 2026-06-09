# Day 011: Hash Maps e Elemento Mais Frequente (O(n))

## 🎯 Desafio

Implementar uma função em JavaScript chamada `encontrarMaisFrequente(array)` que recebe um array e retorna o elemento que aparece mais vezes (o de maior frequência).

**Regra Crucial:** A solução deve ser implementada em **O(n)**, utilizando um objeto (Hash Map) para armazenar as contagens.

**Exemplos:**

| Input (array) | Output (Elemento mais Frequente) |
| :--- | :--- |
| `[1, 3, 1, 3, 2, 1, 3]` | `1` ou `3` (O que aparecer primeiro) |
| `['a', 'b', 'c', 'a', 'a', 'b']` | `'a'` |

---

## 💡 Dicas e Spoilers

<details>
  <summary><strong>Clique aqui para revelar as dicas (Spoiler Alert!)</strong></summary>

1.  **Primeiro Loop (Contagem):** Use um `for...of` para percorrer o array e construir um objeto onde as chaves são os elementos e os valores são as contagens (frequência).
2.  **Segundo Loop (Máximo):** Percorra as **chaves** desse objeto (usando `for...in` ou `Object.keys()`) para encontrar qual chave tem o maior valor de contagem.

</details>

---

## 📊 Análise de Complexidade (Big O)

A complexidade de tempo deve ser $O(n)$, pois o algoritmo é dividido em duas etapas lineares: $O(n)$ para a contagem e $O(k)$ para encontrar o máximo, onde $k$ é o número de elementos únicos (e $k \le n$). $O(n+k)$ simplifica para $O(n)$.

---

⬅ **[Voltar para README.md principal](../../README.md)**