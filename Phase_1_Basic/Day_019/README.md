# Day 019: Remover Duplicatas de Array Ordenado (Two Pointers)

## 🎯 Desafio

Implementar uma função `removeDuplicates(nums)` que recebe um array ordenado e remove os elementos duplicados de forma que cada elemento apareça apenas uma vez.

A alteração deve ser feita **In-place**, ou seja, modificando o array original sem utilizar espaço extra para outro array ($O(1)$ de espaço extra).

**Exemplo:**

| Input (nums) | Output (Length) | Array Resultante (In-place) |
| :--- | :--- | :--- |
| `[1, 1, 2]` | `2` | `[1, 2, _]` |
| `[0, 0, 1, 1, 1, 2, 2, 3]` | `4` | `[0, 1, 2, 3, _, _, _, _]` |

---

## 🏗️ Técnica: Dois Ponteiros (Two Pointers)

Como o array está ordenado, as duplicatas estão sempre lado a lado. Usamos dois "ponteiros" (índices):
1. **Ponteiro de Escrita (`i`):** Mantém a posição onde o próximo elemento único deve ser colocado.
2. **Ponteiro de Leitura (`j`):** Percorre todo o array procurando por valores novos.



---

## 💡 Dicas e Spoilers

<details>
  <summary><strong>Clique aqui para revelar as dicas (Spoiler Alert!)</strong></summary>

* Se `nums[j]` for diferente de `nums[i]`, significa que achamos um novo número único.
* Aumente o `i` e mova o valor de `j` para a posição de `i`.
* No final, retorne `i + 1`.

</details>

---

⬅ **[Voltar para README.md principal](../../README.md)**